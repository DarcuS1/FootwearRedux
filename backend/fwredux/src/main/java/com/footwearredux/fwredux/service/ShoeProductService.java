package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.exception.InvalidShoeStateTransition;
import com.footwearredux.fwredux.model.*;
import com.footwearredux.fwredux.repository.ShoeCategoryRepository;
import com.footwearredux.fwredux.repository.ShoeCategorySpecification;
import com.footwearredux.fwredux.repository.ShoeProductRepository;
import com.footwearredux.fwredux.repository.UserRepository;
import com.footwearredux.fwredux.request.AddShoeProductRequest;
import com.footwearredux.fwredux.response.ShoeProductResponse;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoeProductService {
    private final ShoeProductRepository shoeProductRepository;
    private final ShoeCategoryRepository shoeCategoryRepository;
    private final UserRepository userRepository;

    public List<ShoeProductResponse> fetchShoes(int PageIndex, ShoeFilterCriteria Criteria) {
        final int pageSize = 100;
        PageRequest pageRequest = PageRequest.of(PageIndex, pageSize);

        Page<ShoeProduct> page = shoeProductRepository.findAll(new ShoeCategorySpecification(Criteria), pageRequest);
        List<ShoeProduct> products = page.getContent();

        List<ShoeProductResponse> shoeResponse = new ArrayList<>();

        for (int i = 0; i < products.size(); ++i) {
            ShoeProduct product = products.get(i);
            shoeResponse.add(new ShoeProductResponse(product));
        }

        return shoeResponse;
    }

    public ShoeProduct addShoe(String email, AddShoeProductRequest Request) {
        Optional<User> optUser  = userRepository.findUserByEmail(email);
        if (!optUser.isPresent()) {
            throw new UsernameNotFoundException("User " + email + " was not found");
        }

        User user = optUser.get();

        ShoeCategory shoeCategory = shoeCategoryRepository.save(ShoeCategory.builder()
                .name(Request.getCategory())
                .build());

        ShoeProduct shoe = ShoeProduct.builder()
                .shoeCategory(shoeCategory)
                .shoeState(ShoeState.AVALIABLE)
                .shoeName(Request.getShoeName())
                .price(Request.getPrice())
                .brand(Request.getBrand())
                .color(Request.getColor())
                .shoeSize(Request.getShoeSize())
                .shoeStyle(Request.getShoeStyle())
                .gender(Request.getGender())
                .seller(user)
                .description(Request.getDescription())
                .build();

        return shoeProductRepository.save(shoe);
    }

    public void removeShoe(String userEmail, String uuid) {
        ShoeProduct product = shoeProductRepository.findByUuid(uuid).orElseThrow(() -> new UsernameNotFoundException(userEmail));

        if (!product.getSeller().getEmail().equals(userEmail)) {
            throw new UsernameNotFoundException(userEmail);
        }

        shoeProductRepository.deleteByUuid(uuid);

    }

    public ShoeProductResponse fetchSingleProduct(String uuid){
       Optional<ShoeProduct> product = shoeProductRepository.findByUuid(uuid);

        return new ShoeProductResponse(product.get());

    }

    @Transactional
    public void makeShoeAvaliable(ShoeProduct shoe) {
        if (shoe.getShoeState() != ShoeState.IN_TRANSCATION) {
            throw new InvalidShoeStateTransition(shoe.getShoeState(), ShoeState.AVALIABLE);
        }

        shoe.setShoeState(ShoeState.AVALIABLE);
        shoeProductRepository.save(shoe);
    }

    @Transactional
    public List<ShoeProduct> makeShoeListInTranscation(List<ShoeProduct> shoes) {
        List<ShoeProduct> notAvalible = new ArrayList<>();

        for(ShoeProduct shoeProduct : shoes) {
            if (shoeProduct.getShoeState() != ShoeState.AVALIABLE) {
                notAvalible.add(shoeProduct);
            } else {
                shoeProduct.setShoeState(ShoeState.IN_TRANSCATION);
            }
            shoeProductRepository.save(shoeProduct);
        }

        return notAvalible;
    }

    @Transactional
    public void makeShoeListSold(List<ShoeProduct> shoes) {
        for(ShoeProduct shoeProduct : shoes) {
            if (shoeProduct.getShoeState() != ShoeState.IN_TRANSCATION) {
                throw new InvalidShoeStateTransition(shoeProduct.getShoeState(), ShoeState.SOLD);
            }

            shoeProduct.setShoeState(ShoeState.SOLD);
            shoeProductRepository.save(shoeProduct);
        }
    }


}

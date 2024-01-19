package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.exception.CartShoeDuplicateException;
import com.footwearredux.fwredux.exception.NotAvailableShoeList;
import com.footwearredux.fwredux.exception.ShoeUUIDNotFound;
import com.footwearredux.fwredux.model.Cart;
import com.footwearredux.fwredux.model.ShoeProduct;
import com.footwearredux.fwredux.model.ShoeState;
import com.footwearredux.fwredux.model.User;
import com.footwearredux.fwredux.repository.CartRepository;
import com.footwearredux.fwredux.repository.ShoeProductRepository;
import com.footwearredux.fwredux.repository.UserRepository;
import com.footwearredux.fwredux.response.ShoeProductResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final ShoeProductRepository shoeProductRepository;
    private final ShoeProductService shoeProductService;

    @Transactional
    public List<ShoeProductResponse> getAllShoesInCart(String email) {
        Cart cart = cartRepository.findByUserEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        return cart
                .getProducts()
                .stream()
                .map(prod -> new ShoeProductResponse(prod))
                .collect(Collectors.toList());
    }

    @Transactional
    public void addShoeToCart(String email, String shoeUUID) {
        Cart cart = cartRepository.findByUserEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        ShoeProduct shoe = shoeProductRepository.findByUuidAndShoeState(shoeUUID, ShoeState.AVALIABLE)
                .orElseThrow( () -> new ShoeUUIDNotFound(shoeUUID) );

        for(ShoeProduct product : cart.getProducts()) {
            if(product.getUuid().equals(shoeUUID)) {
                throw new CartShoeDuplicateException(shoeUUID);
            }
        }

        cart.getProducts().add(shoe);
        cartRepository.save(cart);
    }

    @Transactional
    public void deleteProductFromCart(String email, String shoeUUID) {
        Cart cart = cartRepository.findByUserEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        for(int i = 0; i < cart.getProducts().size(); ++i) {
            if (cart.getProducts().get(i).getUuid().equals(shoeUUID)) {
                cart.getProducts().remove(i);
                cartRepository.save(cart);
                break;
            }
        }
    }

    @Transactional
    public void checkoutCart(String email) {
        Cart cart = cartRepository.findByUserEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        List<ShoeProduct> notAvailableShoes = shoeProductService.makeShoeListInTranscation(cart.getProducts());
        if (!notAvailableShoes.isEmpty()) {
            //Rollback transaction
            cart.getProducts().removeIf(notAvailableShoes::contains);
            throw new NotAvailableShoeList(notAvailableShoes);
        }

        shoeProductService.makeShoeListSold(cart.getProducts());

        cart.getProducts().clear();
        cartRepository.save(cart);
    }
}

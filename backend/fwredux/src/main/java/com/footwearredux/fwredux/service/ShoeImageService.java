package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.exception.ShoeUUIDNotFound;
import com.footwearredux.fwredux.model.ShoeImage;
import com.footwearredux.fwredux.model.ShoeProductImages;
import com.footwearredux.fwredux.repository.ShoeImageRepository;
import com.footwearredux.fwredux.repository.ShoeProductImagesRepository;
import com.footwearredux.fwredux.response.ShoeImageListResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ShoeImageService {
    private final ShoeImageRepository shoeImageRepository;
    private final ShoeProductImagesRepository shoeProductImagesRepository;

    private ShoeImage addImage(byte[] imageBytes) {
        ShoeImage image = ShoeImage.builder()
                .image(imageBytes)
                .build();

        return shoeImageRepository.save(image);
    }

    @Transactional
    public String addImageToProductCover(String email, String shoeUuid, byte[] imageBytes) {
        ShoeProductImages shoeProductImages = shoeProductImagesRepository.findByShoeProductUuid(shoeUuid)
                .orElseThrow(() -> new ShoeUUIDNotFound(shoeUuid));

        if (!shoeProductImages.getShoeProduct().getSeller().getEmail().equals(email)) {
            throw new ShoeUUIDNotFound(shoeUuid);
        }

        if (shoeProductImages.getCoverImage() != null) {
            shoeImageRepository.deleteByUuid(shoeProductImages.getCoverImage().getUuid());
        }

        ShoeImage shoeImage = ShoeImage.builder()
                .image(imageBytes)
                .build();
        shoeImage = shoeImageRepository.save(shoeImage);

        shoeProductImages.setCoverImage(shoeImage);
        //?? shoeProductImagesRepository.save(shoeProductImages);

        return shoeImage.getUuid();
    }

    @Transactional
    public String addImageToProductList(String email, String shoeUuid, byte[] imageBytes) {
        ShoeProductImages shoeProductImages = shoeProductImagesRepository.findByShoeProductUuid(shoeUuid)
                .orElseThrow(() -> new ShoeUUIDNotFound(shoeUuid));

        if (!shoeProductImages.getShoeProduct().getSeller().getEmail().equals(email)) {
            throw new ShoeUUIDNotFound(shoeUuid);
        }

        ShoeImage shoeImage = ShoeImage.builder()
                .image(imageBytes)
                .build();
        shoeImage = shoeImageRepository.save(shoeImage);

        shoeProductImages.getImages().add(shoeImage);
        //?? shoeProductImagesRepository.save(shoeProductImages);

        return shoeImage.getUuid();
    }

    @Transactional
    public byte[] fetchImage(String uuid) throws IOException {
        Optional<ShoeImage> imageOptional = shoeImageRepository.findByUuid(uuid);
        return imageOptional
                .orElseThrow( () -> new IOException("Image not found"))
                .getImage();
    }

    public ShoeImageListResponse getImagesForShoe(String shoeUuid) {
        ShoeProductImages shoeProductImages = shoeProductImagesRepository.findByShoeProductUuid(shoeUuid)
                .orElseThrow(() -> new ShoeUUIDNotFound(shoeUuid));

        return ShoeImageListResponse.builder()
                .coverUuid(shoeProductImages.getCoverImage() == null ? ("") : (shoeProductImages.getCoverImage().getUuid()))
                .imagesUuid(shoeProductImages.getImages()
                        .stream()
                        .map(ShoeImage::getUuid)
                        .toList())
                .build();
    }
}

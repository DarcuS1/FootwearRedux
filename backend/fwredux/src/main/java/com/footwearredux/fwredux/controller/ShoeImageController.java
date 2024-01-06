package com.footwearredux.fwredux.controller;

import com.footwearredux.fwredux.request.ShoeImagesAddRequest;
import com.footwearredux.fwredux.response.ShoeImageListResponse;
import com.footwearredux.fwredux.response.ShoeImageUuidResponse;
import com.footwearredux.fwredux.service.ShoeImageService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/shoe_images")
@RequiredArgsConstructor
public class ShoeImageController {

    private final ShoeImageService shoeImageService;

    @GetMapping("/fetch/{uuid}")
    private ResponseEntity<byte[]> fetchImage(@PathVariable String uuid) {
        try {
            byte[] imageBytes = shoeImageService.fetchImage(uuid);

            return ResponseEntity
                    .ok()
                    .contentType(MediaType.IMAGE_JPEG)
                    .body(imageBytes);
        } catch (IOException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("set_cover/{uuid}")
    private ResponseEntity<ShoeImageUuidResponse> setCoverForShoe(
            @NotNull @PathVariable String uuid,
            @NotNull @RequestParam("file") MultipartFile file) {

        // Check if the file is empty
        if (file.isEmpty()) {
            return ResponseEntity
                    .badRequest()
                    .body(
                            ShoeImageUuidResponse.builder()
                                    .error("File is empty.")
                                    .build()
                    );
        }

        // Check if the file is a JPG image
        String contentType = file.getContentType();
        if (!"image/jpeg".equals(contentType)) {
            return ResponseEntity
                    .badRequest()
                    .body(
                            ShoeImageUuidResponse.builder()
                                    .error("File is not a jpeg image.")
                                    .build()
                    );
        }

        try {
            // Get the authenticated user's name
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName();

            // Convert MultipartFile to byte array
            byte[] imageBytes = file.getBytes();

            // Call the service method to add the image to the product cover
            String imageUuid = shoeImageService.addImageToProductCover(username, uuid, imageBytes);
            return ResponseEntity
                    .ok(
                            ShoeImageUuidResponse.builder()
                                    .shoeImageUuid(imageUuid)
                                    .build()
                    );
        } catch (IOException e) {
            // Handle IOException
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ShoeImageUuidResponse.builder()
                            .error("File is empty.")
                            .build()
                    );
        }
    }

    @PostMapping("add_image")
    private ResponseEntity<String> addImageToShoe(
            @Valid @RequestBody ShoeImagesAddRequest request,
            @NotNull @RequestParam("file") MultipartFile file) {

        // Check if the file is empty
        if (file.isEmpty()) {
            return ResponseEntity.badRequest().body("File is empty.");
        }

        // Check if the file is a JPG image
        String contentType = file.getContentType();
        if (!"image/jpeg".equals(contentType)) {
            return ResponseEntity.badRequest().body("File is not a JPG image.");
        }

        try {
            // Get the authenticated user's name
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName();

            // Convert MultipartFile to byte array
            byte[] imageBytes = file.getBytes();

            // Call the service method to add the image to the product cover
            shoeImageService.addImageToProductList(username, request.getShoeUuid(), imageBytes);

            return ResponseEntity.ok().build();
        } catch (IOException e) {
            // Handle IOException
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error processing the file.");
        }
    }
    
    @GetMapping("/get_images/{uuid}")
    ResponseEntity<ShoeImageListResponse> getImagesForShoeUuid(
            @Valid @NotNull @PathVariable String uuid
    ) {
        return ResponseEntity.ok(shoeImageService.getImagesForShoe(uuid));
    }

}

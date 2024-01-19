package com.footwearredux.fwredux.controller;

import com.footwearredux.fwredux.repository.ShoeImageRepository;
import com.footwearredux.fwredux.response.ShoeImageUuidResponse;
import com.footwearredux.fwredux.response.UserResponse;
import com.footwearredux.fwredux.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/current")
    ResponseEntity<UserResponse> fetchCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return ResponseEntity.ok(userService.fetchCurrentUser(authentication.getName()));
    }

    @PostMapping("/set_image")
    ResponseEntity<UserResponse> setCurrentUserImage(
            @RequestParam("file") MultipartFile file
    ) {
        if (file.isEmpty()) {
            return ResponseEntity
                    .badRequest()
                    .build();
        }

        // Check if the file is a JPG image
        String contentType = file.getContentType();
        if (!"image/jpeg".equals(contentType)) {
            return ResponseEntity
                    .badRequest()
                    .build();
        }

        try {
            // Get the authenticated user's name
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName();

            // Convert MultipartFile to byte array
            byte[] imageBytes = file.getBytes();

            // Call the service method to add the image to the product cover

            return ResponseEntity
                    .ok(userService.setCurrentUserImage(username, imageBytes));
        } catch (IOException e) {
            // Handle IOException
            return ResponseEntity
                    .status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .build();
        }
    }

    @GetMapping("/image/{uuid}")
    ResponseEntity<byte[]> getUserImage(
            @Valid @PathVariable String uuid
    ) {
        return ResponseEntity.ok(userService.getUserImageByUserUuid(uuid));
    }
}

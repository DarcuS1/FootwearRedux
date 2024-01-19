package com.footwearredux.fwredux.response;

import com.footwearredux.fwredux.model.*;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

    private String uuid;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String imageUUID;

    private List<ShoeProductResponse> sellingProducts;

    public UserResponse(User user) {
        this.uuid = user.getUuid();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastname();
        this.email = user.getEmail();
        this.imageUUID = user.getImageUUID();
        this.role = user.getRole().name();
        this.sellingProducts = user.getSellingProducts().stream().map((v) -> new ShoeProductResponse(v)).collect(Collectors.toList());
    }
}

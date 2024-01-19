package com.footwearredux.fwredux.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class CartCheckoutRequest {
    @NotNull
    private String fullName;
    @NotNull
    private String phoneNumber;
    @NotNull
    private String email;
    @NotNull
    private String address;
    @NotNull
    private String city;
    @NotNull
    private String state;
    @NotNull
    private String country;
    @NotNull
    private String postalCode;
}

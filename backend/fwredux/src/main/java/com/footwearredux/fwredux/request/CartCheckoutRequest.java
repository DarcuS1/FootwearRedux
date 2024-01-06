package com.footwearredux.fwredux.request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class CartCheckoutRequest {
    @NotNull
    private String demo;
}

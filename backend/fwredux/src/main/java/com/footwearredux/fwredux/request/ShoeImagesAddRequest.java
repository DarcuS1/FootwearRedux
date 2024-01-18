package com.footwearredux.fwredux.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ShoeImagesAddRequest {
    @NotNull
    private String shoeUuid;
}

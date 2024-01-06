package com.footwearredux.fwredux.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReviewFetchRequest {
    @NotNull
    private Integer pageIndex;

    @NotNull
    private String sellerUUID;
}

package com.footwearredux.fwredux.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReviewDeleteRequest {
    @NotNull
    private String reviewUUID;
}

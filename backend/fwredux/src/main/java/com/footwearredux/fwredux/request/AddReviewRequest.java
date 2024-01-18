package com.footwearredux.fwredux.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

@Data
public class AddReviewRequest {
    @NotNull
    @Range(min = 0, max = 10)
    private Integer score;

    @NotNull
    private String review;
}

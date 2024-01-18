package com.footwearredux.fwredux.response;

import com.footwearredux.fwredux.model.Review;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class ReviewResponse {
    private String uuid;
    private Integer score;
    private String review;

    public ReviewResponse(Review review) {
        this.uuid = review.getUuid();
        this.score = review.getScore();
        this.review = review.getReview();
    }
}

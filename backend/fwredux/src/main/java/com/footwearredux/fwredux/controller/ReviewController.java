package com.footwearredux.fwredux.controller;

import com.footwearredux.fwredux.model.Review;
import com.footwearredux.fwredux.request.AddReviewRequest;
import com.footwearredux.fwredux.request.ReviewDeleteRequest;
import com.footwearredux.fwredux.request.ReviewFetchRequest;
import com.footwearredux.fwredux.response.ReviewResponse;
import com.footwearredux.fwredux.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/review")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {
    private final ReviewService reviewService;

    @GetMapping("fetch")
    ResponseEntity<List<ReviewResponse>> fetchAllReviews(
            @Valid @RequestBody ReviewFetchRequest Request) {
        return ResponseEntity.ok(
                reviewService.fetchReviews(Request.getPageIndex(), Request.getSellerUUID())
                        .stream()
                        .map((e) -> new ReviewResponse(e))
                        .toList()
        );
    }

    @PostMapping("addreview")
    ResponseEntity<String> addReview(
            @Valid @RequestBody AddReviewRequest request
            ) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Review review = reviewService.addReview(authentication.getName(), request);

        return ResponseEntity.ok(review.getUuid());
    }

    @DeleteMapping("removereview")
    ResponseEntity<Void> removeReview(
            @Valid @RequestBody ReviewDeleteRequest request
            ) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        reviewService.removeReview(authentication.getName(), request.getReviewUUID());

        return ResponseEntity.ok().build();
    }

}

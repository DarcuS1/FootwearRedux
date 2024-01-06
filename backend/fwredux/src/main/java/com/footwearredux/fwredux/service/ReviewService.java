package com.footwearredux.fwredux.service;

import com.footwearredux.fwredux.model.Review;
import com.footwearredux.fwredux.model.User;
import com.footwearredux.fwredux.repository.ReviewRepository;
import com.footwearredux.fwredux.repository.UserRepository;
import com.footwearredux.fwredux.request.AddReviewRequest;
import com.footwearredux.fwredux.request.ReviewDeleteRequest;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final UserRepository userRepository;
    private final ReviewRepository reviewRepository;

    public List<Review> fetchReviews(Integer pageIndex, String userUUID) {
        int pageSize = 100;
        PageRequest pageRequest = PageRequest.of(pageIndex, pageSize);
        Page<Review> pageReview = reviewRepository.findBySellerUuid(userUUID, pageRequest);

        return pageReview.getContent();
    }

    public Review addReview(String email, AddReviewRequest request) {
        User user = userRepository.findUserByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(email));

        Review review = Review.builder()
                .seller(user)
                .score(request.getScore())
                .review(request.getReview())
                .build();

        return reviewRepository.save(review);
    }

    public void removeReview(String email, String uuid) {
        reviewRepository.deleteByUuidAndSellerEmail(uuid, email);
    }

}

package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    Page<Review> findBySellerUuid(String uuid, Pageable pageable);

    void deleteByUuidAndSellerEmail(String uuid, String email);
}

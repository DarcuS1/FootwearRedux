package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.ShoeProductImages;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShoeProductImagesRepository extends JpaRepository<ShoeProductImages, Integer> {
    Optional<ShoeProductImages> findByShoeProductUuid(String uuid);
}

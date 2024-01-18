package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.ShoeImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShoeImageRepository extends JpaRepository<ShoeImage, Integer> {
    Optional<ShoeImage> findByUuid(String uuid);
    void deleteByUuid(String uuid);
}

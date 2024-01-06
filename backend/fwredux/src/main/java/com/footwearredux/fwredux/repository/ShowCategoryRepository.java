package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.ShoeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShowCategoryRepository extends JpaRepository<ShoeCategory, Integer> {
    Optional<ShoeCategory> findByName(String name);
}

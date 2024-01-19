package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.ShoeCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShoeCategoryRepository extends JpaRepository<ShoeCategory, Integer> {
}

package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.ShoeFilterCriteria;
import com.footwearredux.fwredux.model.ShoeProduct;
import com.footwearredux.fwredux.model.ShoeState;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;
import java.util.Optional;

public interface ShoeProductRepository extends JpaRepository<ShoeProduct, Integer>, JpaSpecificationExecutor<ShoeProduct> {
    Optional<ShoeProduct> findByUuidAndShoeState(String uuid, ShoeState state);
    Optional<ShoeProduct> findByUuid(String uuid);
    void deleteByUuid(String uuid);
}

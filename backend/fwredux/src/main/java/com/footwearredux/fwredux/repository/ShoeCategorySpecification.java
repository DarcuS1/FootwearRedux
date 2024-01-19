package com.footwearredux.fwredux.repository;

import com.footwearredux.fwredux.model.ShoeFilterCriteria;
import com.footwearredux.fwredux.model.ShoeProduct;
import com.footwearredux.fwredux.model.ShoeState;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class ShoeCategorySpecification implements Specification<ShoeProduct> {
    private final ShoeFilterCriteria shoeProduct;

    @Override
    public Predicate toPredicate(Root<ShoeProduct> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();

        if (shoeProduct.getCategory() != null) {
            predicates.add(criteriaBuilder.equal(root.get("shoeCategory"), shoeProduct.getCategory()));
        }

        if (shoeProduct.getPriceMin() != null) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), shoeProduct.getPriceMin()));
        }

        if (shoeProduct.getBrand() != null) {
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("brand"), shoeProduct.getPriceMax()));
        }

        if (shoeProduct.getColor() != null) {
            predicates.add(criteriaBuilder.equal(root.get("color"), shoeProduct.getColor()));
        }

        if (shoeProduct.getShoeSize() != null) {
            predicates.add(criteriaBuilder.equal(root.get("shoeSize"), shoeProduct.getShoeSize()));
        }

        if (shoeProduct.getShoeStyle() != null) {
            predicates.add(criteriaBuilder.equal(root.get("showStyle"), shoeProduct.getShoeStyle()));
        }

        if (shoeProduct.getGender() != null) {
            predicates.add(criteriaBuilder.equal(root.get("gender"), shoeProduct.getGender()));
        }

        predicates.add(criteriaBuilder.equal(root.get("shoeState"), ShoeState.AVALIABLE));

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}

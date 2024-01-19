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

        if (shoeProduct.getCategory() != null && !shoeProduct.getCategory().equals("")) {
            predicates.add(criteriaBuilder.equal(root.get("shoeCategory"), shoeProduct.getCategory()));
        }

        if (shoeProduct.getPriceMin() != null) {
            predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("price"), shoeProduct.getPriceMin()));
        }

        if (shoeProduct.getPriceMax() != null) {
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("price"), shoeProduct.getPriceMax()));
        }

        if (shoeProduct.getBrand() != null && !shoeProduct.getBrand().equals("")) {
            predicates.add(criteriaBuilder.equal(root.get("brand"), shoeProduct.getBrand()));
        }

        if (shoeProduct.getColor() != null && !shoeProduct.getColor().equals("")) {
            predicates.add(criteriaBuilder.equal(root.get("color"), shoeProduct.getColor()));
        }

        if (shoeProduct.getShoeSize() != null && !shoeProduct.getShoeSize().equals("")) {
            predicates.add(criteriaBuilder.equal(root.get("shoeSize"), shoeProduct.getShoeSize()));
        }

        if (shoeProduct.getShoeStyle() != null && !shoeProduct.getShoeStyle().equals("")) {
            predicates.add(criteriaBuilder.equal(root.get("shoeStyle"), shoeProduct.getShoeStyle()));
        }

        if (shoeProduct.getGender() != null && !shoeProduct.getGender().equals("")) {
            predicates.add(criteriaBuilder.equal(root.get("gender"), shoeProduct.getGender()));
        }

        predicates.add(criteriaBuilder.equal(root.get("shoeState"), ShoeState.AVALIABLE));

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}

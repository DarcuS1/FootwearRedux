package com.footwearredux.fwredux.response;

import com.footwearredux.fwredux.model.GenderRole;
import com.footwearredux.fwredux.model.ShoeCategory;
import com.footwearredux.fwredux.model.ShoeProduct;
import com.footwearredux.fwredux.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShoeProductResponse {
    private String productUUID;
    private String shoeName;
    private String shoeCategory;
    private Integer price;
    private String brand;
    private String color;
    private Integer shoeSize;
    private String shoeStyle;
    private GenderRole gender;
    private String coverImageUuid;
    private String sellerUUID;
    private String description;
    private List<String> additionalImages;

    public ShoeProductResponse(ShoeProduct product) {
        this.productUUID = product.getUuid();
        this.shoeName = product.getShoeName();
        this.shoeCategory = product.getShoeCategory().getName();
        this.price = product.getPrice();
        this.brand = product.getBrand();
        this.color = product.getColor();
        this.shoeSize = product.getShoeSize();
        this.shoeStyle = product.getShoeStyle();
        this.gender = product.getGender();
        try {
            this.coverImageUuid = product.getImages().getCoverImage().getUuid();
            this.additionalImages = product.getImages().getImages().stream().map((img) -> img.getUuid()).collect(Collectors.toList());
        } catch (Exception ex) {
            this.coverImageUuid = "";
        }
        this.sellerUUID = product.getSeller().getUuid();
        this.description = product.getDescription();
    }
}

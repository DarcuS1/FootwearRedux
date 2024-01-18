package com.footwearredux.fwredux.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShoeFilterCriteria {
    private Integer id;

    private ShoeCategory category;
    private Integer priceMin;
    private Integer priceMax;
    private String brand;
    private String color;
    private Integer shoeSize;
    private String shoeStyle;

    private GenderRole gender;
    private Integer sellerId;
}

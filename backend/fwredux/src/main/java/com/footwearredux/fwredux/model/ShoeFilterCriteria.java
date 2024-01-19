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

    private String category;
    private Integer priceMin;
    private Integer priceMax;
    private String brand;
    private String color;
    private Integer shoeSize;
    private String shoeStyle;

    @Enumerated(value = EnumType.STRING)
    private GenderRole gender;
    private String sellerUuid;
}

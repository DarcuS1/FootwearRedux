package com.footwearredux.fwredux.request;

import com.footwearredux.fwredux.model.GenderRole;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddShoeProductRequest {
    @NotNull
    private String shoeName;

    @NotNull
    private String category;

    @NotNull
    private Integer price;

    @NotNull
    private String brand;

    @NotNull
    private String color;

    @NotNull
    private Integer shoeSize;

    @NotNull
    private String shoeStyle;

    @NotNull
    @Enumerated(value = EnumType.STRING)
    private GenderRole gender;
}
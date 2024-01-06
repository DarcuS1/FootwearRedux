package com.footwearredux.fwredux.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ShoeProduct {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(updatable = false, unique = true, nullable = false)
    String uuid;

    @Column(nullable = false)
    String shoeName;

    @Enumerated(value = EnumType.ORDINAL)
    private ShoeState shoeState;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "shoe_category_id")
    private ShoeCategory shoeCategory;

    private Integer price;
    private String brand;
    private String color;
    private Integer shoeSize;
    private String shoeStyle;

    @Enumerated(value = EnumType.STRING)
    private GenderRole gender;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "shoe_product_images_id")
    private ShoeProductImages images;

    @PrePersist
    public void initializeUUID() {
        if (uuid == null) {
            uuid = UUID.randomUUID().toString();
        }

        if (images == null) {
            images = ShoeProductImages.builder()
                    .shoeProduct(this)
                    .build();
        }
    }
}

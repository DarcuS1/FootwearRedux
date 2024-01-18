package com.footwearredux.fwredux.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Range;

import java.util.Collections;
import java.util.UUID;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    @Id
    @GeneratedValue
    private Integer id;

    @Column(updatable = false, unique = true, nullable = false)
    private String uuid;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "seller_id", nullable = false)
    private User seller;

    @Range(min = 0, max = 10)
    private Integer score;

    private String review;

    @PrePersist
    public void initialize() {
        if (uuid == null) {
            uuid = UUID.randomUUID().toString();
        }
    }
}

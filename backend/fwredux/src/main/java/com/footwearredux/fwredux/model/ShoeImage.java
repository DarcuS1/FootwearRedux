package com.footwearredux.fwredux.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ShoeImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;

    @Column(updatable = false, unique = true, nullable = false)
    private String uuid;

    @Lob
    @Basic(fetch = FetchType.LAZY)
    byte[] image;

    @PrePersist
    public void initialize() {
        if (uuid == null) {
            uuid = UUID.randomUUID().toString();
        }
    }
}

package com.flower_store.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "VARCHAR(255)", nullable = false)
    private String name;

    @Column(columnDefinition = "VARCHAR(20)", nullable = false)
    private String code;

    @Column(columnDefinition = "LONGTEXT")
    private String description;

    @Column(columnDefinition = "BIGINT")
    private Long price;

    @ManyToOne
    @JoinColumn(name = "product_type_id", referencedColumnName = "id")
    private ProductType productType;

    private boolean isDeleted;
}

package com.flower_store.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Collection;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "product_picture",
            joinColumns = @JoinColumn(name = "picture_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id"))
    private Collection<Product> products;

    private String pictureUrl;

    private boolean isDeleted;
}

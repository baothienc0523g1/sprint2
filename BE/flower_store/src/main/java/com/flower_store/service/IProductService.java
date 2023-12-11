package com.flower_store.service;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;

import java.util.Collection;
import java.util.Optional;

public interface IProductService {
    Collection<Feature> findAllFeature();

    Optional<Feature> findFeatureById(Integer paramId);

    Collection<Feature> findAllProductByType(Integer id);

    void addProduct(Product product);

    void removeProduct(Integer id);

    void updateProduct(Product product);

    Optional<Product> findById(Integer id);

    Collection<Feature> findProductWithOption(String productName, Long productMinPrice,
                                              Long productMaxPrice, Integer productTypeId);
}

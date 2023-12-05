package com.flower_store.service;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.Optional;

public interface IProductService {
    Collection<Feature> findAllFeature();

    Optional<Feature> findFeatureById(Integer paramId);

    Collection<Product> findAllProductType1();

    Collection<Product> findAllProductType2();

    Collection<Product> findAllProductType3();

    void addProduct(Product product);

    void removeProduct(Integer id);

    void updateProduct(Product product);
}

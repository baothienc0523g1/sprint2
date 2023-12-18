package com.flower_store.service;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Collection;
import java.util.Optional;

public interface IProductService {
    Page<Feature> findAllFeatureWithSort(String searchName, Pageable pageable);

    Collection<Feature> findTrendingFeature();

    Optional<Feature> findFeatureById(Integer paramId);

    Collection<Feature> findAllProductByType(Integer id);

    void addProduct(Product product);

    void removeProduct(Integer id);

    void updateProduct(Product product);

    Optional<Product> findById(Integer id);

    Collection<Feature> findProductWithOption(Long productMinPrice,
                                              Long productMaxPrice,
                                              Integer productTypeId,
                                              String productName);

    Optional<Long> maxPriceOfProducts();

    String productTypeName(int id);
}

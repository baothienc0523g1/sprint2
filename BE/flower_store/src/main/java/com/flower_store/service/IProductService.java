package com.flower_store.service;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;
import org.springframework.data.domain.Page;

import java.util.Collection;
import java.util.Optional;

public interface IProductService {
    Page<Feature> findAllFeatureWithSearch(String searchName, String sort);

    Collection<Feature> findTrendingFeature();

    Optional<Feature> findFeatureById(Integer paramId);

    Collection<Feature> findAllProductByType(Integer id);

    void addProduct(Product product);

    boolean removeProduct(Integer id);

    boolean updateProduct(Integer id, Product product);

    Optional<Product> findById(Integer id);

    Collection<Feature> findProductWithOption(Long productMinPrice,
                                              Long productMaxPrice,
                                              Integer productTypeId,
                                              String productName);

    Optional<Long> maxPriceOfProducts();

    String productTypeName(int id);

    Page<Feature> getAllFeature(int page, int size, String searchKeyWord, String sort);

}

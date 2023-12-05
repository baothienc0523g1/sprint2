package com.flower_store.service.impl;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;
import com.flower_store.repository.IProductRepository;
import com.flower_store.service.IProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    private final Logger logger = LoggerFactory.getLogger(ProductService.class);

    @Autowired
    private IProductRepository productRepository;

    @Override
    public Collection<Feature> findAllFeature() {
        return this.productRepository.findAllFeature();
    }

    @Override
    public Optional<Feature> findFeatureById(Integer paramId) {
        return this.productRepository.findFeatureById(paramId);
    }

    @Override
    public Collection<Product> findAllProductType1() {
        return null;
    }

    @Override
    public Collection<Product> findAllProductType2() {
        return null;
    }

    @Override
    public Collection<Product> findAllProductType3() {
        return null;
    }

    @Override
    @Transactional
    public void addProduct(Product product) {
        try {
            this.productRepository.save(product);
        } catch (Exception e) {
            logger.warn("Error while adding product: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public void removeProduct(Integer id) {
        try {
            Optional<Product> existedProduct = this.productRepository.findById(id);
            existedProduct.ifPresent(product -> this.productRepository.delete(product));
        } catch (Exception e) {
            logger.warn("Error while removing product: " + e.getMessage());
        }
    }

    @Override
    public void updateProduct(Product product) {
        try {
            Optional<Product> existedProduct = this.productRepository.findById(product.getId());
            existedProduct.ifPresent(temp -> this.productRepository.save(temp));
        } catch (Exception e) {
            logger.warn("Error while update product: " + e.getMessage());
        }
    }
}

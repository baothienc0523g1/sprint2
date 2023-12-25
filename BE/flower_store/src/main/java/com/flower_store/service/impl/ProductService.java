package com.flower_store.service.impl;

import com.flower_store.dto.Feature;
import com.flower_store.dto.ProductDto;
import com.flower_store.model.Product;
import com.flower_store.repository.IProductRepository;
import com.flower_store.service.IProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

@Service
public class ProductService implements IProductService {

    private final Logger logger = LoggerFactory.getLogger(ProductService.class);

    @Autowired
    private IProductRepository productRepository;


    /**
     * method get product with sort for display on main page
     *
     * @param searchName
     * @param sort
     * @return Page<Feature>
     * @author ThienBB
     * @since 14-12-2023
     */
    @Override
    public Page<Feature> findAllFeatureWithSearch(String searchName, String sort) {
        Pageable pageable;
        Page<Feature> features;

        switch (sort) {
            case "asc":
                pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by("price").ascending());
                features = this.productRepository.findAllFeatureWithSearchName("%" + searchName + "%", pageable);
                return features;

            case "desc":
                pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by("price").descending());
                features = this.productRepository.findAllFeatureWithSearchName("%" + searchName + "%", pageable);
                return features;

            case "":
                pageable = PageRequest.of(0, Integer.MAX_VALUE);
                features = this.productRepository.findAllFeatureWithSearchName("%" + searchName + "%", pageable);
                return features;

            default:
                return Page.empty();

        }
    }

    /**
     * method get trending product by how much time it's in order details table
     *
     * @return Collection<Feature>
     * @author Bao Thien
     * @since 12-12-2023
     */
    @Override
    public Collection<Feature> findTrendingFeature() {
        return this.productRepository.findTrendingFeature();
    }


    /**
     * method find feature by id for display on main page when user
     * want to search
     *
     * @param id
     * @return Optional<Feature>
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    public Optional<Feature> findFeatureById(Integer id) {
        return this.productRepository.findFeatureById(id);
    }


    /**
     * method find feature by type id for display on main page
     *
     * @param id
     * @return Collection<Product>
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    public Collection<Feature> findAllProductByType(Integer id) {
        return this.productRepository.findAllProductByType(id);
    }


    /**
     * method add new product
     *
     * @param product
     * @return void
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    @Transactional
    public void addProduct(Product product) {
        try {
            this.productRepository.save(product);
        } catch (Exception e) {
            logger.warn("Error while adding product: " + e.getMessage());
        }
    }


    /**
     * method remove product for admin
     *
     * @param id
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    @Transactional
    public boolean removeProduct(Integer id) {
        try {
            Optional<Product> existedProduct = this.productRepository.findById(id);
            if (existedProduct.isPresent()) {
                this.productRepository.delete(existedProduct.get());
                return true;
            }
            return false;
        } catch (Exception e) {
            logger.warn("Error while removing product: " + e.getMessage());
        }
        return false;
    }


    /**
     * method update product for admin
     *
     * @param product
     * @param id
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    public boolean updateProduct(Integer id, Product product) {
        try {
            Optional<Product> existedProduct = this.productRepository.findById(product.getId());
            if (existedProduct.isPresent()) {
                this.productRepository.save(product);
                return true;
            }
            return false;
        } catch (Exception e) {
            logger.warn("Error while update product: " + e.getMessage());
        }
        return false;
    }


    /**
     * method update product for admin
     *
     * @param id
     * @return void
     * @author Bao Thien
     * @since 08-12-2023
     */
    @Override
    public Optional<Product> findById(Integer id) {
        return this.productRepository.findById(id);
    }


    /**
     * method find products with option
     *
     * @param productName
     * @param productMinPrice
     * @param productMaxPrice
     * @param productTypeId
     * @author Bao Thien
     * @since 10-12-2023
     */
    @Override
    public Collection<Feature> findProductWithOption(Long productMinPrice,
                                                     Long productMaxPrice,
                                                     Integer productTypeId,
                                                     String productName) {
        try {
            return this.productRepository.findProductWithOption(productMinPrice,
                    productMaxPrice, productTypeId, "%" + productName + "%");
        } catch (IllegalArgumentException e) {
            logger.warn("{IllegalArgumentException}: {}", e.getMessage());
        } catch (TransactionException e) {
            logger.warn("{TransactionException}: {}", e.getMessage());
        } catch (Exception e) {
            logger.warn("{Error while finding product with option}: {}", e.getMessage());
        }
        return null;
    }

    /**
     * method find the highest price of products
     *
     * @return Optional<Long>
     * @author Bao Thien
     * @since 10-12-2023
     */
    @Override
    public Optional<Long> maxPriceOfProducts() {
        return this.productRepository.getMaxPrice();
    }

    /**
     * method get product type name by id
     *
     * @return String
     * @author Bao Thien
     * @since 10-12-2023
     */
    @Override
    public String productTypeName(int id) {
        return this.productRepository.getProductTypeName(id);
    }


    /**
     * method get products for management with pageable, sort,
     * search with product name or product code
     *
     * @return Collection
     * @author Bao Thien
     * @since 09-01-2024
     */
    @Override
    public Page<Feature> getAllFeature(int page, int size, String searchKeyWord, String sort) {
        Page<Feature> features;
        Pageable pageable;

        switch (sort) {
            case "asc":
                pageable = PageRequest.of(page, size, Sort.by("price").ascending());
                features = this.productRepository.getAllFeature(pageable, "%" + searchKeyWord + "%");
                return features;

            case "desc":
                pageable = PageRequest.of(page, size, Sort.by("price").descending());
                features = this.productRepository.getAllFeature(pageable, "%" + searchKeyWord + "%");
                return features;

            case "":
                pageable = PageRequest.of(page, size);
                features = this.productRepository.getAllFeature(pageable, "%" + searchKeyWord + "%");
                return features;

            default:
                return Page.empty();
        }
    }


}

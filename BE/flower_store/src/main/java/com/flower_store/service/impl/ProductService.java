package com.flower_store.service.impl;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;
import com.flower_store.repository.IProductRepository;
import com.flower_store.service.IProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
     * method get product with search
     *
     * @param pageable
     * @param searchName
     * @return Page<Feature>
     * @author ThienBB
     * @since 14-12-2023
     */
    @Override
    public Page<Feature> findAllFeatureWithSort(String searchName, Pageable pageable) {
        return this.productRepository.findAllFeatureWithSort("%" + searchName + "%", pageable);
    }

    /**
     * method get trending product by quantity in order details table
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
     * method find feature by id
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
     * method find feature by type id
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
     * method remove product
     *
     * @param id
     * @return void
     * @author Bao Thien
     * @since 06-12-2023
     */
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


    /**
     * method update product
     *
     * @param product
     * @return void
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    public void updateProduct(Product product) {
        try {
            Optional<Product> existedProduct = this.productRepository.findById(product.getId());
            existedProduct.ifPresent(temp -> this.productRepository.save(temp));
        } catch (Exception e) {
            logger.warn("Error while update product: " + e.getMessage());
        }
    }


    /**
     * method update product
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

    @Override
    public Optional<Long> maxPriceOfProducts() {
        return this.productRepository.getMaxPrice();
    }

    @Override
    public String productTypeName(int id) {
        return this.productRepository.getProductTypeName(id);
    }
}

package com.flower_store.controller;

import com.flower_store.dto.Feature;
import com.flower_store.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class ProductRestController {

    @Autowired
    private IProductService productService;

    /**
     * method get product with sort/non-sort and search
     *
     * @param sort
     * @param searchName
     * @return Page<Feature>
     * @author ThienBB
     * @since 14-12-2023
     */
    @GetMapping("/public/features")
    public ResponseEntity<?> getFeatureWithSort(
            @RequestParam(name = "sort", required = false) String sort,
            @RequestParam(name = "searchName", required = false, defaultValue = "") String searchName) {

        Pageable pageable;
        Page<Feature> features;
        switch (sort) {
            case "asc":
                pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by("price").ascending());
                features = this.productService.findAllFeatureWithSort(searchName, pageable);
                if (features == null) {
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
                if (features.isEmpty()) {
                    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
                }
                return ResponseEntity.ok(features);
            case "desc":
                pageable = PageRequest.of(0, Integer.MAX_VALUE, Sort.by("price").descending());
                features = this.productService.findAllFeatureWithSort(searchName, pageable);
                if (features == null) {
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
                if (features.isEmpty()) {
                    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
                }
                return ResponseEntity.ok(features);
            case "":
                pageable = PageRequest.of(0, Integer.MAX_VALUE);
                features = this.productService.findAllFeatureWithSort(searchName, pageable);
                if (features == null) {
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
                if (features.isEmpty()) {
                    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
                }
                return ResponseEntity.ok(features);
            default:
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }


    /**
     * method get trending product to main page
     *
     * @param
     * @return Collection<Feature>
     * @author ThienBB
     * @since 12-12-2023
     */
    @GetMapping("/public/trending-features")
    public ResponseEntity<?> getTrendingFeature() {
        Collection<Feature> products = this.productService.findTrendingFeature();

        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return ResponseEntity.ok(products);
        }
    }


    /**
     * method get product by ID
     *
     * @param id
     * @return ResponseEntity
     * @author ThienBB
     * @since 05-12-2023
     */
    @GetMapping("/public/product-details/{id}")
    public ResponseEntity<?> getFeatureById(@PathVariable(name = "id") Integer id) {
        Optional<Feature> products = this.productService.findFeatureById(id);

        if (products.isPresent()) {
            return ResponseEntity.ok(products);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    /**
     * method get product list by type id
     *
     * @param id
     * @return ResponseEntity
     * @author ThienBB
     * @since 05-12-2023
     */
    @GetMapping("/public/products/types/{id}")
    public ResponseEntity<?> getFeaturePicture(@PathVariable(name = "id") Integer id) {
        Collection<Feature> productListByType = this.productService.findAllProductByType(id);

        if (productListByType.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return ResponseEntity.ok(productListByType);
        }
    }

    /**
     * method find products with option
     *
     * @param productMinPrice
     * @param productMaxPrice
     * @param productTypeId
     * @param productName
     * @author Bao Thien
     * @since 10-12-2023
     */
    @GetMapping("/public/products/search/{productMinPrice}/{productMaxPrice}/{productTypeId}")
    public ResponseEntity<?> findProductWithOption(
            @PathVariable(name = "productMinPrice") Long productMinPrice,
            @PathVariable(name = "productMaxPrice") Long productMaxPrice,
            @PathVariable(name = "productTypeId") Integer productTypeId,
            @RequestParam(name = "productName", defaultValue = "", required = false) String productName) {

        Collection<Feature> productList = this.productService.findProductWithOption(
                productMinPrice,
                productMaxPrice,
                productTypeId,
                productName);

        if (productList == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (productList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productList, HttpStatus.OK);
        }
    }


    /**
     * method find the highest price of products
     *
     * @return Optional<Long>
     * @author Bao Thien
     * @since 10-12-2023
     */
    @GetMapping("/public/products/getProductHighestPrice")
    public ResponseEntity<?> getProductHighestPrice() {
        Optional<Long> highestPrice = this.productService.maxPriceOfProducts();

        if (highestPrice.isPresent()) {
            return ResponseEntity.ok(highestPrice.get());
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    /**
     * method find product type name by id
     *
     * @param id
     * @return String
     * @author Bao Thien
     * @since 10-12-2023
     */
    @GetMapping("/public/products/typename/{id}")
    public ResponseEntity<?> getProductTypeName(@PathVariable(name = "id") int id) {
        String typeName = this.productService.productTypeName(id);

        return ResponseEntity.ok(typeName);
    }
}

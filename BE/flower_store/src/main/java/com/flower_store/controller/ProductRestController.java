package com.flower_store.controller;

import com.flower_store.dto.Feature;
import com.flower_store.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
     * method get product to main page
     *
     * @param
     * @return Collection<Feature>
     * @author ThienBB
     * @since 05-12-2023
     */
    @GetMapping("/public/feature")
    public ResponseEntity<?> getFeature(@RequestParam(name = "sort", required = false) String sort,
                                        @RequestParam(name = "searchName", required = false, defaultValue = "") String searchName) {
        Collection<Feature> features = this.productService.findAllFeature(searchName);

        if (features == null) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        if (features.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(features);
    }

    /**
     * method get trending product to main page
     *
     * @param
     * @return Collection<Feature>
     * @author ThienBB
     * @since 12-12-2023
     */
    @GetMapping("/public/trending-feature")
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
    @GetMapping("/public/product-detail/{id}")
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
    @GetMapping("/public/product/type/{id}")
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
     * @param productName
     * @param productMinPrice
     * @param productMaxPrice
     * @param productTypeId
     * @author Bao Thien
     * @since 10-12-2023
     */
    @GetMapping("/public/product/search/{productMinPrice}/{productMaxPrice}/{productTypeId}")
    public ResponseEntity<?> findProductWithOption(@PathVariable(name = "productMinPrice") Long productMinPrice,
                                                   @PathVariable(name = "productMaxPrice") Long productMaxPrice,
                                                   @PathVariable(name = "productTypeId") Integer productTypeId
    ) {
        Collection<Feature> productList = this.productService.findProductWithOption(productMinPrice,
                productMaxPrice, productTypeId);

        if (productList == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else if (productList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(productList, HttpStatus.OK);
        }
    }

    @GetMapping("/public/product/getProductHighestPrice")
    public ResponseEntity<?> getProductHighestPrice() {
        Optional<Long> highestPrice = this.productService.maxPriceOfProducts();

        if (highestPrice.isPresent()) {
            return ResponseEntity.ok(highestPrice.get());
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/public/product/typename/{id}")
    public ResponseEntity<?> getProductTypeName(@PathVariable(name = "id") int id) {
        String typeName = this.productService.productTypeName(id);

        return ResponseEntity.ok(typeName);
    }
}

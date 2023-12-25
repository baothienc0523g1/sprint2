package com.flower_store.controller;

import com.flower_store.dto.Feature;
import com.flower_store.dto.ProductDto;
import com.flower_store.model.Product;
import com.flower_store.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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
     * method get products with sort/non-sort and search
     * for display on main page
     *
     * @param sort
     * @param searchName
     * @return ResponseEntity<?>
     * @author Bao Thien
     * @since 14-12-2023
     */
    @GetMapping("/public/features")
    public ResponseEntity<?> getFeatureWithSort(
            @RequestParam(name = "sort", required = false) String sort,
            @RequestParam(name = "searchName", required = false, defaultValue = "") String searchName) {

        Page<Feature> features = this.productService.findAllFeatureWithSearch(searchName, sort);

        if (features.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(features);
    }


    /**
     * method get trending product to main page
     *
     * @return ResponseEntity<?>
     * @author Bao Thien
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
     * @return ResponseEntity<?>
     * @author Bao Thien
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
     * @return ResponseEntity<?>
     * @author Bao Thien
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
     * method find products with options
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
     * @return ResponseEntity<?>
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
     * @return ResponseEntity<?>
     * @author Bao Thien
     * @since 10-12-2023
     */
    @GetMapping("/public/products/typename/{id}")
    public ResponseEntity<?> getProductTypeName(@PathVariable(name = "id") int id) {
        String typeName = this.productService.productTypeName(id);

        return ResponseEntity.ok(typeName);
    }


    /**
     * method get products for management with pageable, sort,
     * search with product name or product code
     *
     * @return Collection
     * @author Bao Thien
     * @since 09-01-2024
     */
    @GetMapping("/admin/products")
    public ResponseEntity<?> getAllFeature(
            @RequestParam(name = "search", required = false, defaultValue = "") String searchKeyWord,
            @RequestParam(name = "sort", required = false, defaultValue = "") String sort,
            @RequestParam(name = "page") int page,
            @RequestParam(name = "size") int size

    ) {
        Page<Feature> features = this.productService.getAllFeature(page, size, searchKeyWord, sort);

        if (features.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ResponseEntity.ok(features);
    }




    //not tested yet
    @GetMapping("/admin/products/{id}")
    public ResponseEntity<?> getProductById(@PathVariable(name = "id") Integer id) {
        Optional<Product> existedProduct = this.productService.findById(id);
        if (existedProduct.isPresent()) {
            return ResponseEntity.ok(existedProduct);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //not tested yet
    @PutMapping("/admin/products")
    public ResponseEntity<?> updateProduct(@RequestBody ProductDto productDto, BindingResult bindingResult) {
        new ProductDto().validate(productDto, bindingResult);
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(productDto, HttpStatus.BAD_REQUEST);
        }

        Product product = new Product();
        BeanUtils.copyProperties(productDto, product);

        boolean isUpdated = this.productService.updateProduct(productDto.getId(), product);

        if (isUpdated) {
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

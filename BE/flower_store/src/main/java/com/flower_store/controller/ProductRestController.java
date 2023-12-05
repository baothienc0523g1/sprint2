package com.flower_store.controller;

import com.flower_store.dto.Feature;
import com.flower_store.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/public/feature")
    public ResponseEntity<?> getFeature() {
        Collection<Feature> products = this.productService.findAllFeature();

        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return ResponseEntity.ok(products);
        }
    }

    @GetMapping("/public/product-detail/{id}")
    public ResponseEntity<?> getFeatureById(@PathVariable(name = "id") Integer id) {
        Optional<Feature> products = this.productService.findFeatureById(id);

        if (products.isPresent()) {
            return ResponseEntity.ok(products);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/public/feature-picture")
    public ResponseEntity<?> getFeaturePicture() {
        return null;
    }

}

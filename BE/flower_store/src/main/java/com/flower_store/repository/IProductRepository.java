package com.flower_store.repository;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

@Repository
@Transactional
public interface IProductRepository extends JpaRepository<Product, Integer> {

    @Query(value =
            " select p.id as id, p.name as name, p.code as code, " +
                    " p.description as description, " +
                    " p.price as price, pt.id as productTypeId, " +
                    " pt.name as productTypeName, pp.picture_url as pictureUrl " +
                    " from products as p " +
                    " join product_picture as pp " +
                    " on p.id = pp.product_id " +
                    " join product_type as pt " +
                    " on p.product_type_id = pt.id ", nativeQuery = true)
    Collection<Feature> findAllFeature();

    @Query(value =
            " select p.id as id, p.name as name, p.code as code, " +
                    " p.description as description, " +
                    " p.price as price, pt.id as productTypeId, " +
                    " pt.name as productTypeName, pp.picture_url as pictureUrl " +
                    " from products as p " +
                    " join product_picture as pp " +
                    " on p.id = pp.product_id " +
                    " join product_type as pt " +
                    " on p.product_type_id = pt.id " +
                    " where p.id = :paramId", nativeQuery = true)
    Optional<Feature> findFeatureById(@Param("paramId") Integer paramId);

    @Query(value = " select products.* from products where product_type_id=1 ", nativeQuery = true)
    Collection<Product> findAllProductType1();

    @Query(value = " select products.* from products where product_type_id=2 ", nativeQuery = true)
    Collection<Product> findAllProductType2();

    @Query(value = " select products.* from products where product_type_id=3 ", nativeQuery = true)
    Collection<Product> findAllProductType3();
}

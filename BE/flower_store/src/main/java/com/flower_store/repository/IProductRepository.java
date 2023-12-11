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

    /**
     * method get product to main page
     *
     * @param
     * @return Collection<Feature>
     * @author Bao Thien
     * @since 05-12-2023
     */
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
                    " where p.is_deleted = 0 ", nativeQuery = true)
    Collection<Feature> findAllFeature();

    /**
     * method get product by ID
     *
     * @param id
     * @return PathVariable ID
     * @author Bao Thien
     * @since 05-12-2023
     */
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
                    " where p.id = :paramId " +
                    " and p.is_deleted = 0 ", nativeQuery = true)
    Optional<Feature> findFeatureById(@Param("paramId") Integer paramId);


    /**
     * method get product list by type id
     *
     * @param id
     * @return PathVariable ID
     * @author Bao Thien
     * @since 05-12-2023
     */
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
                    " where pt.id = :paramId " +
                    " and p.is_deleted = 0 ", nativeQuery = true)
    Collection<Feature> findAllProductByType(@Param("paramId") Integer paramId);

    /**
     * method find products with option
     *
     * @param productName
     * @param productMinPrice
     * @param productMaxPrice
     * @param productTypeId
     * @author Bao Thien
     * @since 08-12-2023
     */
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
                    " where p.name like :productName " +
                    " and (p.price between :productMinPrice and :productMaxPrice) " +
                    " and p.product_type_id = :productTypeId " +
                    " and p.is_deleted = 0 ", nativeQuery = true)
    Collection<Feature> findProductWithOption(@Param("productName") String productName,
                                              @Param("productMinPrice") Long productMinPrice,
                                              @Param("productMaxPrice") Long productMaxPrice,
                                              @Param("productTypeId") Integer productTypeId);
}

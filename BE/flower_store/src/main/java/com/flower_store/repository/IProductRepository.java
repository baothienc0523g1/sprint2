package com.flower_store.repository;

import com.flower_store.dto.Feature;
import com.flower_store.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
     * method get product with search
     *
     * @param pageable
     * @param searchName
     * @return Page<Feature>
     * @author ThienBB
     * @since 14-12-2023
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
                    " where p.is_deleted = 0 " +
                    " and p.name like :searchName ", nativeQuery = true)
    Page<Feature> findAllFeatureWithSort(@Param("searchName") String searchName, Pageable pageable);

    /**
     * method get trending product by quantity in order details table
     *
     * @return Collection<Feature>
     * @author Bao Thien
     * @since 12-12-2023
     */
    @Query(value =
            " select p.id as id, p.name as name, p.code as code, " +
                    " p.description as description, " +
                    " p.price as price, pt.id as productTypeId, " +
                    " pt.name as productTypeName, pp.picture_url as pictureUrl " +
                    " from products as p " +
                    " left join product_picture as pp " +
                    " on p.id = pp.product_id " +
                    " left join product_type as pt " +
                    " on p.product_type_id = pt.id " +
                    " left join order_detail as od " +
                    " on p.id = od.product_id " +
                    " where p.is_deleted = 0 " +
                    " group by p.id " +
                    " order by COUNT(od.product_id) desc " +
                    " limit 12 ", nativeQuery = true)
    Collection<Feature> findTrendingFeature();

    /**
     * method get product by ID
     *
     * @param paramId
     * @return Optional<Feature>
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
                    " and p.is_deleted = 0 " +
                    " order by p.price asc ", nativeQuery = true)
    Optional<Feature> findFeatureById(@Param("paramId") Integer paramId);


    /**
     * method get product list by type id
     *
     * @param paramId
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
                    " where pt.id = :paramId " +
                    " and p.is_deleted = 0 " +
                    " order by p.price asc ", nativeQuery = true)
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
                    " where p.price between :productMinPrice " +
                    " and :productMaxPrice " +
                    " and p.product_type_id = :productTypeId " +
                    " and p.is_deleted = 0 " +
                    " and p.name like :productName " +
                    " order by p.price asc ", nativeQuery = true)
    Collection<Feature> findProductWithOption(@Param("productMinPrice") Long productMinPrice,
                                              @Param("productMaxPrice") Long productMaxPrice,
                                              @Param("productTypeId") Integer productTypeId,
                                              @Param("productName") String productName);

    /**
     * method find products max price
     *
     * @return long price
     * @author Bao Thien
     * @since 08-12-2023
     */
    @Query(value =
            " select price from products " +
                    " order by price desc" +
                    " limit 1 ", nativeQuery = true)
    Optional<Long> getMaxPrice();

    /**
     * method find products max price
     *
     * @return long price
     * @author Bao Thien
     * @since 08-12-2023
     */
    @Query(value =
            " select name from product_type " +
                    " where id = :id ", nativeQuery = true)
    String getProductTypeName(int id);

}

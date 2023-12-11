package com.flower_store.repository;

import com.flower_store.dto.CartDto;
import com.flower_store.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

@Repository
@Transactional
public interface ICartRepository extends JpaRepository<Cart, Integer> {

    /**
     * method get cart by username after user log in
     *
     * @param username
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Query(value =
            " select users.name as userFullname, users.address as address, " +
                    " users.phone_number as phoneNumber, " +
                    " products.name as productName, products.price as productPrice, " +
                    " carts.quantity as productQuantity, product_picture.picture_url as productPicture," +
                    " products.id as productId " +
                    " from carts " +
                    " left join users " +
                    " on carts.user_id = users.id " +
                    " left join products " +
                    " on carts.product_id = products.id " +
                    " left join product_picture " +
                    " on products.id = product_picture.product_id " +
                    " where users.username = :username and carts.is_deleted = 0 ", nativeQuery = true)
    Collection<CartDto> getCartByUsername(@Param("username") String username);


    /**
     * method get cart by username and product id for display
     *
     * @param username
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Query(value =
            " select carts.* from carts " +
                    " left join users " +
                    " on carts.user_id = users.id " +
                    " where users.username = :username and carts.product_id = :productId " +
                    " and carts.is_deleted = 0 ", nativeQuery = true)
    Optional<Cart> findExistedCart(@Param("username") String username, @Param("productId") Integer productId);


    /**
     * method remove products from cart
     *
     * @param userName
     * @param productId
     * @author Bao Thien
     * @since 08-12-2023
     */
    @Transactional
    @Modifying
    @Query(value =
            " delete carts.* " +
                    " from carts " +
                    " left join users " +
                    " on carts.user_id = users.id " +
                    " where users.username = :userName " +
                    " and carts.product_id = :productId " +
                    " and carts.is_deleted = 0 ", nativeQuery = true)
    void removeByUserAndProduct(@Param("userName") String userName, @Param("productId") int productId);

}

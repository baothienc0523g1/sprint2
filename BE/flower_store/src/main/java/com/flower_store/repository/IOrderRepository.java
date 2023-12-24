package com.flower_store.repository;

import com.flower_store.dto.OrderDto;
import com.flower_store.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IOrderRepository extends JpaRepository<Order, Integer> {

    /**
     * check if order code is exist in data base or not
     *
     * @param orderCode
     * @return String
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Query(value = " select order_code " +
            " from orders " +
            " where order_code = :orderCode " +
            " and is_deleted = 0 ", nativeQuery = true)
    String isCodeExisted(@Param("orderCode") String orderCode);


    /**
     * get all order by username, order code
     *
     * @param pageable
     * @param userName
     * @param orderCode
     * @return String
     * @author Bao Thien
     * @since 20-12-2023
     */

    @Query(value = " select o.id as id, " +
            " o.time as time, " +
            " o.message as message, " +
            " o.order_code as orderCode, " +
            " u.name as userFullname " +
            " from orders as o " +
            " left join users as u" +
            " on o.user_id = u.id " +
            " where u.username = :userName " +
            " and o.is_deleted = 0" +
            " and o.order_code like :orderCode" +
            " order by o.time desc ", nativeQuery = true)
    Page<OrderDto> getOrderByUsername(Pageable pageable,
                                      @Param("userName") String userName,
                                      @Param("orderCode") String orderCode);


    /**
     * get first time order by username in date string
     *
     * @param userName
     * @return String
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Query(value = " select `time` from orders " +
            " join users " +
            " on orders.user_id = users.id " +
            " where users.username = :userName " +
            " order by `time` asc " +
            " limit 1   ", nativeQuery = true)
    String getFirstOrderDateWithUserName(@Param("userName") String userName);


    /**
     * get last time order by username in date string
     *
     * @param userName
     * @return String
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Query(value = " select `time` from orders " +
            " join users " +
            " on orders.user_id = users.id " +
            " where users.username = :userName " +
            " order by `time` desc " +
            " limit 1 ", nativeQuery = true)
    String getLastOrderDateWithUserName(@Param("userName") String userName);
}

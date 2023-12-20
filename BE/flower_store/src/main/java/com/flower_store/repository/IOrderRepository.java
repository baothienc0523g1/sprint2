package com.flower_store.repository;

import com.flower_store.dto.OrderDto;
import com.flower_store.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IOrderRepository extends JpaRepository<Order, Integer> {

    @Query(value = " select order_code " +
            " from orders " +
            " where order_code = :orderCode " +
            " and is_deleted = 0 ", nativeQuery = true)
    String isCodeExisted(@Param("orderCode") String orderCode);


    @Query(value = " select o.id as id, " +
            " o.time as time, " +
            " o.message as message, " +
            " o.order_code as orderCode, " +
            " u.name as userFullname " +
            " from orders as o " +
            " left join users as u" +
            " on o.user_id = u.id " +
            " where u.username = :userName " +
            " and o.is_deleted = 0 " +
            " order by o.time desc ", nativeQuery = true)
    Page<OrderDto> getOrderByUsername(Pageable pageable, @Param("userName") String userName);
}

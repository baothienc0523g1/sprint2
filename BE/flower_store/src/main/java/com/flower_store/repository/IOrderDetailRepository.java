package com.flower_store.repository;

import com.flower_store.dto.OrderDetailDto;
import com.flower_store.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {

    /**
     * method get order details by username and order id
     *
     * @param userName
     * @param iD
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Query(value = " select od.id as id," +
            " o.id as orderId," +
            " p.id as productId," +
            " p.name as productName," +
            " pt.name as productTypeName," +
            " od.quantity as quantity," +
            " od.total_cost as totalCost " +
            " from order_detail as od " +
            " left join orders as o " +
            " on od.order_id = o.id " +
            " left join products as p " +
            " on od.product_id = p.id " +
            " left join product_type as pt " +
            " on p.product_type_id = pt.id " +
            " left join users as u " +
            " on o.user_id = u.id " +
            " where od.is_deleted = 0 " +
            " and u.username = :userName" +
            " and o.id = :iD ", nativeQuery = true)
    Collection<OrderDetailDto> findOrderDetailByUsernameAndOrderId(@Param("userName") String userName,
                                                                   @Param("iD") int iD);
}

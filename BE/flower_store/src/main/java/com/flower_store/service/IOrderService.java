package com.flower_store.service;

import com.flower_store.dto.OrderDetailDto;
import com.flower_store.dto.OrderDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Collection;


public interface IOrderService {

    Page<OrderDto> getOrderByUsername(Pageable pageable,
                                      String username,
                                      String orderCode);

    Collection<OrderDetailDto> findOrderDetailByUsernameAndOrderId(String userName, int iD);

    String getFirstOrderDateWithUserName(String userName);

    String getLastOrderDateWithUserName(String userName);
}

package com.flower_store.service.impl;

import com.flower_store.dto.OrderDetailDto;
import com.flower_store.dto.OrderDto;
import com.flower_store.repository.IOrderDetailRepository;
import com.flower_store.repository.IOrderRepository;
import com.flower_store.repository.IUserRepository;
import com.flower_store.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collection;


@Service
public class OrderService implements IOrderService {

    @Autowired
    private IOrderRepository orderRepository;

    @Autowired
    private IOrderDetailRepository orderDetailRepository;

    @Autowired
    private IUserRepository userRepository;

    /**
     * method get order history by username
     *
     * @param username
     * @param pageable
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Override
    public Page<OrderDto> getOrderByUsername(Pageable pageable, String username) {
        return this.orderRepository.getOrderByUsername(pageable, username);
    }

    /**
     * method get order details by username and order id
     *
     * @param username
     * @param id
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Override
    public Collection<OrderDetailDto> findOrderDetailByUsernameAndOrderId(String username, int id) {
        return this.orderDetailRepository.findOrderDetailByUsernameAndOrderId(username, id);
    }
}
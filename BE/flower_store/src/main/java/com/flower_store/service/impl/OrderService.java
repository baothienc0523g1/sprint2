package com.flower_store.service.impl;

import com.flower_store.dto.OrderDetailDto;
import com.flower_store.dto.OrderDto;
import com.flower_store.repository.IOrderDetailRepository;
import com.flower_store.repository.IOrderRepository;
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

    /**
     * get all order by username, order code
     *
     * @param pageable
     * @param username
     * @param orderCode
     * @return Page<OrderDto>
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Override
    public Page<OrderDto> getOrderByUsername(Pageable pageable,
                                             String username,
                                             String orderCode) {
        return this.orderRepository.getOrderByUsername(pageable, username, '%' + orderCode + '%');
    }

    /**
     * method get order details by username and order id
     *
     * @param username
     * @param id
     * @return Collection<OrderDetailDto>
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Override
    public Collection<OrderDetailDto> findOrderDetailByUsernameAndOrderId(String username, int id) {
        return this.orderDetailRepository.findOrderDetailByUsernameAndOrderId(username, id);
    }


    /**
     * get first time order by username in string
     *
     * @param userName
     * @return String
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Override
    public String getFirstOrderDateWithUserName(String userName) {
        return this.orderRepository.getFirstOrderDateWithUserName(userName);
    }


    /**
     * get last time order by username in date string
     *
     * @param userName
     * @return String
     * @author Bao Thien
     * @since 20-12-2023
     */
    @Override
    public String getLastOrderDateWithUserName(String userName) {
        return this.orderRepository.getLastOrderDateWithUserName(userName);
    }
}

package com.flower_store.controller;

import com.flower_store.dto.OrderDetailDto;
import com.flower_store.dto.OrderDto;
import com.flower_store.model.User;
import com.flower_store.repository.IUserRepository;
import com.flower_store.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/member/orders")
public class OrderRestController {

    @Autowired
    private IOrderService orderService;

    @Autowired
    private IUserRepository userRepository;

    /**
     * method get order history by username
     *
     * @param username
     * @author Bao Thien
     * @since 20-12-2023
     */
    @GetMapping("/{username}")
    public ResponseEntity<?> getOrderByUserName(@PathVariable(name = "username") String username,
                                                @RequestParam(name = "page") int page,
                                                @RequestParam(name = "size") int size) {
        Optional<User> existedUser = this.userRepository.findUserByUsername(username);

        if (!existedUser.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Pageable pageable = PageRequest.of(page, size);
        Page<OrderDto> orders = this.orderService.getOrderByUsername(pageable, username);

        if (orders.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ResponseEntity.ok(orders);
    }

    /**
     * method get order details by username and order id
     *
     * @param username
     * @author Bao Thien
     * @since 20-12-2023
     */
    @GetMapping("/details/{orderId}/{username}")
    public ResponseEntity<?> getOrderDetail(@PathVariable(name = "orderId") int orderId,
                                            @PathVariable(name = "username") String username) {
        Optional<User> existedUser = this.userRepository.findUserByUsername(username);

        if (!existedUser.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Collection<OrderDetailDto> ordersDetail =
                this.orderService.findOrderDetailByUsernameAndOrderId(username, orderId);

        if (ordersDetail.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ResponseEntity.ok(ordersDetail);
    }
}

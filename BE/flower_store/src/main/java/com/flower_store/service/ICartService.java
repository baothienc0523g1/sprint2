package com.flower_store.service;

import com.flower_store.dto.CartDto;
import com.flower_store.dto.Feature;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface ICartService {
    Collection<CartDto> getCartByUsername(String username);

    boolean addToCart(String username, Integer productId, Integer productQuantity);

    boolean removeFromCart(String username, int productId);

    boolean adjustmentProductInCart(String username, String actionCase, int productId, int quantity);

}

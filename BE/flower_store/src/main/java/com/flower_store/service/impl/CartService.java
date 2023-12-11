package com.flower_store.service.impl;

import com.flower_store.dto.CartDto;
import com.flower_store.model.Cart;
import com.flower_store.model.Product;
import com.flower_store.model.User;
import com.flower_store.repository.ICartRepository;
import com.flower_store.repository.IUserRepository;
import com.flower_store.service.ICartService;
import com.flower_store.service.IProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Optional;

import static com.flower_store.commons.Enum.ADD_TO_CART;
import static com.flower_store.commons.Enum.REMOVE_FROM_CART;

@Service
public class CartService implements ICartService {

    @Autowired
    private ICartRepository cartRepository;

    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private IProductService productService;
    private static final Logger logger = LoggerFactory.getLogger(CartService.class);

    /**
     * method get cart by username after user log in
     *
     * @param username
     * @return Collection<CartDto>
     * @author Bao Thien
     * @since 06-12-2023
     */
    @Override
    public Collection<CartDto> getCartByUsername(String username) {
        try {
            return this.cartRepository.getCartByUsername(username);
        } catch (IllegalArgumentException e) {
            logger.warn("Error while get cart by username ", e.getMessage());
        }
        return null;
    }

    /**
     * method add to cart by username after user log in
     *
     * @param userName
     * @param productId
     * @param productQuantity
     * @return boolean
     * @author Bao Thien
     * @since 08-12-2023
     */
    @Override
    @Transactional
    public boolean addToCart(String userName, Integer productId, Integer productQuantity) {
        try {
            Optional<User> existedUser = this.userRepository.findUserByUsername(userName);
            Optional<Product> existedProduct = this.productService.findById(productId);
            Optional<Cart> existedCart = this.cartRepository.findExistedCart(userName, productId);
            Boolean isDataValid = existedUser.isPresent() && existedProduct.isPresent();

            if (isDataValid && existedCart.isPresent()) {
                Optional<Cart> cart = this.cartRepository.findExistedCart(userName, productId);
                if (cart.isPresent()) {
                    Integer prevQuantity = cart.get().getQuantity();
                    cart.get().setQuantity(productQuantity + prevQuantity);
                    this.cartRepository.save(cart.get());
                    return true;
                }
            } else if (isDataValid && !existedCart.isPresent()) {
                Cart newCart = new Cart(existedUser.get(), existedProduct.get(), productQuantity);
                this.cartRepository.save(newCart);
                return true;
            } else {
                return false;
            }
        } catch (IllegalArgumentException e) {
            logger.warn("IllegalArgumentException: ", e.getMessage());
        } catch (TransactionException e) {
            logger.warn("TransactionException: ", e.getMessage());
        } catch (Exception e) {
            logger.warn("Error while add new cart: ", e.getMessage());
        }
        return false;
    }

    /**
     * method remove products from cart
     *
     * @param productId
     * @return boolean
     * @author Bui Bao TransactionExceptionhien
     * @since 08-12-2023
     */
    @Override
    public boolean removeFromCart(String username, int productId) {
        try {
            Optional<Cart> existedCart = this.cartRepository.findExistedCart(username, productId);

            if (existedCart.isPresent()) {
                this.cartRepository.removeByUserAndProduct(username, productId);
                return true;
            }
        } catch (IllegalArgumentException e) {
            logger.warn("IllegalArgumentException: ", e.getMessage());
        } catch (TransactionException e) {
            logger.warn("TransactionException: ", e.getMessage());
        } catch (Exception e) {
            logger.warn("Error while remove product from cart: ", e.getMessage());
        }
        return false;
    }

    /**
     * method do adjustment product quantity in cart
     *
     * @param username
     * @param productId
     * @param quantity
     * @author Bao Thien
     * @since 10-12-2023
     */
    @Override
    @Transactional
    public boolean adjustmentProductInCart(String actionCase, String username, int productId, int quantity) {
        switch (actionCase) {
            case ADD_TO_CART:
                return this.addToCart(username, productId, quantity);
            case REMOVE_FROM_CART:
                return this.addToCart(username, productId, -quantity);
            default:
                return false;
        }
    }

}

package com.flower_store.controller;

import com.flower_store.dto.CartDto;
import com.flower_store.model.User;
import com.flower_store.service.ICartService;
import com.flower_store.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

import static com.flower_store.commons.Enum.ADD_TO_CART;
import static com.flower_store.commons.Enum.REMOVE_FROM_CART;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/member/carts")
public class CartRestController {

    @Autowired
    private ICartService cartService;

    @Autowired
    private IUserService userService;


    /**
     * method get cart by username after user log in
     *
     * @param username
     * @author Bao Thien
     * @since 06-12-2023
     */
    @GetMapping("/{username}")
    public ResponseEntity<?> getCartByUsername(@PathVariable(name = "username") String username) {

        Optional<User> user = this.userService.findUserByUsername(username);
        if (!user.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Collection<CartDto> userCart = this.cartService.getCartByUsername(username);

        if (userCart.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return ResponseEntity.ok(userCart);
    }

    /**
     * method add only 1 new product to cart
     *
     * @param username
     * @param productId
     * @param quantity
     * @author Bao Thien
     * @since 08-12-2023
     */
    @GetMapping("/{username}/{productId}/{quantity}")
    public ResponseEntity<?> addNewProductToCart(
            @PathVariable(name = "username") String username,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.addToCart(username, productId, quantity);

        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * method add product(s) into cart
     *
     * @param username
     * @param productId
     * @param quantity
     * @author Bao Thien
     * @since 08-12-2023
     */
    @GetMapping("/add/{username}/{productId}/{quantity}")
    public ResponseEntity<?> addProductsToCart(
            @PathVariable(name = "username") String username,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.adjustmentProductInCart(ADD_TO_CART, username, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * method minus product(s) into cart
     *
     * @param username
     * @param productId
     * @param quantity
     * @author Bao Thien
     * @since 08-12-2023
     */
    @GetMapping("/remove/{username}/{productId}/{quantity}")
    public ResponseEntity<?> removeProductsInCart(
            @PathVariable(name = "username") String username,
            @PathVariable(name = "productId") Integer productId,
            @PathVariable(name = "quantity") Integer quantity) {

        boolean flag = this.cartService.adjustmentProductInCart(REMOVE_FROM_CART, username, productId, quantity);
        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * method remove products from cart
     *
     * @param username
     * @param productId
     * @author Bao Thien
     * @since 08-12-2023
     */
    @DeleteMapping("/{username}/{productId}")
    public ResponseEntity<?> removeProduct(@PathVariable(name = "username") String username,
                                           @PathVariable(name = "productId") int productId) {

        boolean flag = this.cartService.removeFromCart(username, productId);

        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }



    /**
     * method do pay
     *
     * @param username
     * @param cartPayDto
     * @author Bao Thien
     * @since 16-12-2023
     */
    @PostMapping("/pay")
    public ResponseEntity<?> cartPay(
            @RequestParam(name = "username") String username) {

        boolean flag = this.cartService.cartPay(username);

        if (flag) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

}

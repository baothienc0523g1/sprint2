import * as cartService from '../service/cartService';

const getCartFromAPI = () => async (dispatch) => {
    try {
        const data = await cartService.getCart();
        dispatch({
            type: GET_CART_FROM_API,
            payload: data,
        });
    } catch (err) {
        console.log(err);
    }
}

const addToCart = (username, productId, productQuantity) => async (dispatch) => {
    try {
        await cartService.addNewProductToCart(username,
            productId, productQuantity);
        dispatch({
            type: ADD_ITEMS,
            payload: username, productId, productQuantity,
        })
    } catch (err) {
        console.log(err);
    }
};

const removeProducts = (username, productId) => async (dispatch) => {
    try {
        await cartService.removeProductFromCart(username, productId);
        dispatch({
            type: REMOVE_ITEMS
        })
    } catch (err) {
        console.log(err);
    }
};

const GET_CART_FROM_API = "GET_CART_FROM_API";
const ADD_ITEMS = "ADD_ITEMS";
const MINUS_ITEMS = "MINUS_ITEMS";
const REMOVE_ITEMS = "REMOVE_ITEMS";
const REMOVE_CART = "REMOVE_CART";

export {getCartFromAPI, addToCart, removeProducts}

export {GET_CART_FROM_API, ADD_ITEMS, MINUS_ITEMS, REMOVE_ITEMS, REMOVE_CART}
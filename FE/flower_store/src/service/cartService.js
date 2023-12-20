import axios from "axios";
import {getUsernameByJwt} from "./securityService";

const BASE_API = "http://localhost:8080/api/member/carts";

const getCart = async () => {
    try {
        const username = getUsernameByJwt();
        const res = await axios.get(BASE_API + `/${username}`);
        return res.data;
    } catch (e) {
        console.log(e)
    }
}

const addNewProductToCart = async (username, productId, productQuantity) => {
    try {
        const res = await axios.get(BASE_API + `/${username}/${productId}/${productQuantity}`);
        return res.status;
    } catch (e) {
        console.log(e);
    }
}

const minusProductFromCart = async (username, productId, productQuantity) => {
    try {
        const res = await axios.get(BASE_API + `/remove/${username}/${productId}/${productQuantity}`);
        return res.status;
    } catch (e) {
        console.log(e);
    }
}

const removeProductFromCart = async (username, productId) => {
    try {
        const res = await axios.delete(BASE_API + `/${username}/${productId}`);
        return res.status;
    } catch (e) {
        console.log(e);
    }
}

const payCart = async (message) => {
    try {
        const username = getUsernameByJwt();
        const orderPayDto = {
            username: username,
            message: message,
        }
        return await axios.post(BASE_API + `/pay`, orderPayDto);
    } catch (err) {

    }
}

export {getCart, addNewProductToCart, removeProductFromCart, minusProductFromCart, payCart}

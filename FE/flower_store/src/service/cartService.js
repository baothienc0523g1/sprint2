import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {getAccessToken} from "./securityService";

const BASE_API = "http://localhost:8080/api/member/cart";

const getCart = async () => {
    try {
        const token = getAccessToken();
        const username = jwtDecode(token).sub;
        const res = await axios.get(BASE_API + `/${username}`);
        return res.data;
    } catch (e) {
        console.log(e);
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

const removeProductFromCart = async (username, productId) => {
    try {
        const res = await axios.delete(BASE_API + `/${username}/${productId}`);
        return res.status;
    } catch (e) {
        console.log(e);
    }
}


export {getCart, addNewProductToCart, removeProductFromCart}

import {getUsernameByJwt} from "./securityService";
import axios from "axios";

const BASE_API = "http://localhost:8080/api/member/orders";

const getOrderByUsername = async (page, size) => {
    try {
        const username = getUsernameByJwt();
        if (!username) {
            return null;
        }
        const res = await axios.get(BASE_API + `/${username}?page=${page}&size=${size}`)
        return res.data.content;
    } catch (err) {

    }
}

const getOrderDetails = async (orderId) => {
    try {
        const username = getUsernameByJwt();
        if (!username) {
            return null;
        }
        const res = await axios.get(BASE_API + `/details/${orderId}/${username}`)
        return res.data;
    } catch
        (err) {

    }
}

export {getOrderByUsername, getOrderDetails};
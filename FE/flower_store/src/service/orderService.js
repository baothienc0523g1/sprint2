import {getUsernameByJwt} from "./securityService";
import axios from "axios";

const BASE_API = "http://10.10.8.247:8080/api/member/orders";

const getOrderByUsername = async (page, size, orderCode) => {
    try {
        const username = getUsernameByJwt();
        const res = await axios.get(BASE_API + `/${username}?page=${page}&size=${size}`
            + `&orderCode=${orderCode}`)
        return res.data;
    } catch (err) {

    }
}

const getOrderDetails = async (orderId) => {
    try {
        const username = getUsernameByJwt();
        const res = await axios.get(BASE_API + `/details/${orderId}/${username}`)
        return res.data;
    } catch (err) {

    }
}

const getFirstOrderDay = async () => {
    try {
        const username = getUsernameByJwt();
        const res = await axios.get(BASE_API + `/firstOrder/${username}`)
        return res.data;
    } catch (err) {

    }
}

const getLastOrderDay = async () => {
    try {
        const username = getUsernameByJwt();
        const res = await axios.get(BASE_API + `/lastOrder/${username}`)
        return res.data;
    } catch (err) {

    }
}
export {getOrderByUsername, getOrderDetails, getLastOrderDay, getFirstOrderDay};
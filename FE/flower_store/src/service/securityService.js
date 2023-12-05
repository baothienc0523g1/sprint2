import axios from "axios";
import {jwtDecode} from "jwt-decode";

const BASE_API = "http://localhost:8080/api";

const doLogin = async (event) => {
    return await axios.post(BASE_API + '/public/login', event)
};

const addAccessToken = async (token) => {
  await localStorage.setItem("accessToken", token);
};

const getAccessToken = async () => {
    const jwt = localStorage.getItem("accessToken");
    if (jwt) {
        return jwt;
    } else {
        return null;
    }
};

const getUserFullnameByJwt = () => {
    const jwt = localStorage.getItem("accessToken");
    if (jwt) {
        return jwtDecode(jwt).name;
    } else {
        return null;
    }
};

const getRoleByJwt = () => {
    const jwt = localStorage.getItem("accessToken");
    if (jwt) {
        return jwtDecode(jwt).role[0].authority;
    } else {
        return null;
    }
};

export {doLogin, addAccessToken, getAccessToken, getUserFullnameByJwt, getRoleByJwt}
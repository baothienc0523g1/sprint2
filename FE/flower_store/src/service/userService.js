import {getUsernameByJwt} from "./securityService";
import axios from "axios";

const BASE_API = "http://localhost:8080/api/member/";

const getUserInformation = async () => {
    try {
        const username = getUsernameByJwt();
        if (username) {
            return (await axios.get(BASE_API + `${username}`)).data;
        }
    } catch (err) {

    }
}

export {getUserInformation}
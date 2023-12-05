import axios from "axios";

const BASE_API = "http://localhost:8080/api";

const getFeature = async () => {
    try {
        return await axios.get(BASE_API + "/public/feature");
    } catch (e) {
        console.log(e);
    }
}

const getProductDetail = async (id) => {
    try {
        return await axios.get(BASE_API + `/public/product-detail/${id}`);
    } catch (e) {
        console.log(e);
    }
}

export {getFeature, getProductDetail}
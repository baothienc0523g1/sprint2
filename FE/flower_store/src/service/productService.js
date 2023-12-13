import axios from "axios";

const BASE_API = "http://localhost:8080/api";

const getFeature = async () => {
    try {
        return await axios.get(BASE_API + "/public/feature");
    } catch (e) {
        console.log(e);
    }
}

const getTrendingFeature = async () => {
    try {
        const res = await axios.get(BASE_API + "/public/trending-feature");
        return res.data
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

const getProductListWithType = async (id) => {
    try {
        const res = await axios.get(BASE_API + `/public/product/type/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

const getProductTypeList = async () => {
    try {
        const res = await axios.get(BASE_API + "/public/product-type");
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

const getProductWithSearchOption = async (productMinPrice, productMaxPrice, productTypeId) => {
    try {
        const res = await axios.get(BASE_API + `/public/product/search/${productMinPrice}`
            + `/${productMaxPrice}/${productTypeId}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

const getProductHighestPrice = async () => {
    try {
        const res = await axios.get(BASE_API + "/public/product/getProductHighestPrice/");
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

const getProductTypeName = async (id) => {
    try {
        const res = await axios.get(BASE_API + `/public/product/typename/${id}`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export {getFeature, getProductDetail, getProductListWithType, getProductTypeList, getProductWithSearchOption,
    getProductHighestPrice, getProductTypeName, getTrendingFeature}
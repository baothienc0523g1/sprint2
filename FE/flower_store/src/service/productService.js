import axios from "axios";

const BASE_API = "http://localhost:8080/api";

const getFeature = async (sort, searchName) => {
    try {
        const res = await axios.get(BASE_API +
            `/public/features?sort=${sort}&searchName=${searchName}`);
        return res.data.content;
    } catch (e) {
        console.log(e);
    }
}

const getTrendingFeature = async () => {
    try {
        const res = await axios.get(BASE_API + "/public/trending-features");
        return res.data
    } catch (e) {
        console.log(e);
    }
}

const getProductDetail = async (id) => {
    try {
        return await axios.get(BASE_API + `/public/product-details/${id}`);
    } catch (e) {
        console.log(e);
    }
}

const getProductListWithType = async (id) => {
    try {
        const res = await axios.get(BASE_API + `/public/products/types/${id}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

const getProductWithSearchOption = async (productMinPrice, productMaxPrice, productTypeId, productName) => {
    try {
        const res = await axios.get(BASE_API + `/public/products/search/${productMinPrice}`
            + `/${productMaxPrice}/${productTypeId}?productName=${productName}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

const getProductHighestPrice = async () => {
    try {
        const res = await axios.get(BASE_API + "/public/products/getProductHighestPrice/");
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

const getProductTypeName = async (id) => {
    try {
        const res = await axios.get(BASE_API + `/public/products/typename/${id}`)
        return res.data;
    } catch (e) {
        console.log(e);
    }
}
export {
    getFeature, getProductDetail, getProductListWithType, getProductWithSearchOption,
    getProductHighestPrice, getProductTypeName, getTrendingFeature
}
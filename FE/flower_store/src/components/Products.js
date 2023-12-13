import '../style/products.css'
import MyCard from "./MyCard";
import {useEffect, useState} from "react";
import * as featureService from "../service/productService";
import {useNavigate} from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const productList = async () => {
        const data = (await featureService.getFeature()).data;
        await setProducts(data);
    }

    const handleChangeProductTypeBirthday = () => {
        navigate("/product/type/1");
    }

    const handleChangeProductTypeEvents = () => {
        navigate("/product/type/2");
    }

    const handleChangeProductTypePlants = () => {
        navigate("/product/type/3");
    }

    const handleChangeToTrendingProduct = () => {
        navigate("/product/trending");
    }

    useEffect(() => {
        productList();
    }, [])

    if (products.length === 0) {
        return null;
    }

    if (products.length === 0) {
        return null;
    }

    return (
        <>
            <div className="products container">

                <div className="product-type-search-div mt-2 mb-2">
                    <button className="product-type-btn" onClick={handleChangeToTrendingProduct}>Bán chạy <i className="fa-solid fa-fire"/></button>
                    <button className="product-type-btn" onClick={handleChangeProductTypeBirthday}>Sinh nhật <i className="fa-solid fa-gift"/></button>
                    <button className="product-type-btn" onClick={handleChangeProductTypeEvents}>Dịp <i className="fa-solid fa-calendar-days"/></button>
                    <button className="product-type-btn" onClick={handleChangeProductTypePlants}>Hoa và cây <i className="fa-brands fa-pagelines"/></button>
                </div>
                <div className="row">
                    {
                        products.map((temp, index) => {
                            return (
                                <div key={index} className="col-xxl-2 col-lg-3 col-md-4 col-sm-5 mb-5 mt-3"
                                     style={{textAlign: "center"}}>
                                    <MyCard
                                        url={temp.pictureUrl}
                                        name={temp.name}
                                        price={new Intl.NumberFormat().format(temp.price)}
                                        id={temp.id}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
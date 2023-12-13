import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import * as productService from "../service/productService";
import MyCard from "./MyCard";
import '../style/products.css'

export default function ProductsWithType() {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [highestPrice, setHighestPrice] = useState(0);
    const [productMinPrice, setProductMinPrice] = useState(0);
    const [productMaxPrice, setProductMaxPrice] = useState(highestPrice);
    const [categoryName, setCategoryName] = useState();

    const getCategoryName = async () => {
        const data = await productService.getProductTypeName(id);
        await setCategoryName(data);
    }

    const getHighestPrice = async () => {
        const data = await productService.getProductHighestPrice();
        await setHighestPrice(data);
    }

    const getProductWithType = async (id) => {
        const data = await productService.getProductListWithType(id);
        await setProducts(data);
    }

    const handleProductSearch = async () => {
        const data = await productService.getProductWithSearchOption(
            productMinPrice,
            productMaxPrice,
            id);
        await setProducts(data);
    }

    const handleChangeSearchPrice = async (event) => {
        const splitEvent = event.target.value.split(" ")
        if (splitEvent.length > 1) {
            setProductMinPrice(splitEvent[0]);
            setProductMaxPrice(splitEvent[1]);
        } else {
            setProductMinPrice(splitEvent[0]);
            setProductMaxPrice(highestPrice);
        }
    }

    const handleResetSearch = async () => {
        getProductWithType(id);
    }

    useEffect(() => {
        getCategoryName();
        getHighestPrice();
        getProductWithType(id);
    }, [id])

    if (!categoryName) {
        return null;
    }

    return (
        <>
            <Banner/>
            <div className="container products">
                <h1 className="main-title">{categoryName && categoryName}</h1>
                <div className="product-type-search-div mt-2 mb-2">
                    <div>
                        <select name="price" className="search-option"
                                onChange={(event) => handleChangeSearchPrice(event)}>
                            <option value="0 199000">Dưới 200.000</option>
                            <option value="200000 499000">200.000 ~ 499.000</option>
                            <option value="500000 699000">500.000 ~ 699.000</option>
                            <option value="700000 1000000">700.000 ~ 1.000.000</option>
                            <option value="1000000">Trên 1.000.000</option>
                        </select>
                    </div>
                    <div>
                        <button className="search-btn" type="button" onClick={handleProductSearch}>
                            Tìm kiếm
                        </button>
                    </div>
                    <div>
                        <button className="search-btn" type="button" onClick={handleResetSearch}>
                            Xóa bộ lọc
                        </button>
                    </div>
                </div>
                <div className="row">

                    {
                        products.length === 0 && <div className="container products">
                            <p className="mt-5"
                               style={{fontStyle: "italic", color: "gray"}}>
                                Không có sản phẩm </p>
                        </div>
                    }

                    {
                        products.length > 0 &&
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
            <Footer/>
        </>
    )
}
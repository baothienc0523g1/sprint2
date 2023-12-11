import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import * as productService from "../service/productService";
import MyCard from "./MyCard";
import '../style/products.css'

export default function ProductsWithType() {
    const {id} = useParams();
    const [products, setProducts] = useState();
    const [searchName, setSearchName] = useState("");
    const [searchPrice, setSearchPrice] = useState([]);

    const getProductWithType = async (id) => {
        const data = await productService.getProductListWithType(id);
        await setProducts(data);
    }

    const handleProductSearch = () => {
        const res = productService.getProductWithSearchOption(searchName, );
    }

    const handleSearchName = (event) => {
        setSearchName(event);
    }

    const handleChangeSearchPrice = (event) => {
        const splitEvent = event.split(" ")
        setSearchPrice([splitEvent[0], splitEvent[1]]);
    }

    useEffect(() => {
        getProductWithType(id);
    }, [id, products])

    if (!products) {
        return null;
    } else if (products.length === 0) {
        return (
            <>
                <Banner/>
                <div className="container products">
                    <p className="mt-5"
                       style={{fontStyle: "italic", color: "gray"}}>
                        Sản phẩm thuộc danh mục <span style={{textDecoration: "underline"}}>
                        {products[0].productTypeName}
                    </span> hiện đang hết hàng!
                        Liên hệ QTV để được hỗ trợ ngay nhé!</p>
                </div>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <Banner/>
            <div className="container products">
                <h1 className="main-title">{products[0].productTypeName}</h1>
                <h1>search area start</h1>
                <div className="product-type-search-div mt-2 mb-2">
                    <div>
                        <input type="text" className="search-input" placeholder="Tên sản phẩm"
                               onChange={event => handleSearchName(event)}/>
                    </div>
                    <div>
                        <select name="price" className="search-option"
                                onSelect={event => handleChangeSearchPrice(event)}>
                            <option value="0 199000">Dưới 200.000</option>
                            <option value="200000 499000">200.000 ~ 499.000</option>
                            <option value="500000 699000">500.000 ~ 699.000</option>
                            <option value="700000 1000000">700.000 ~ 1.000.000</option>
                            <option value="1000000">Trên 1.000.000</option>
                        </select>
                    </div>
                    <div>
                        <button className="search-btn">
                            Tìm kiếm
                        </button>
                    </div>
                    <div>
                        <button className="search-btn" type="button">
                            Xóa bộ lọc
                        </button>
                    </div>
                </div>
                <h1>search area end</h1>
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
            <Footer/>
        </>
    )
}
import '../style/products.css'
import MyCard from "./MyCard";
import {useEffect, useState} from "react";
import * as featureService from "../service/productService";
import {useNavigate} from "react-router-dom";
import LazyLoad from "react-lazy-load";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState("");
    const [searchName, setSearchName] = useState("");
    const navigate = useNavigate();

    const getProductList = async () => {
        const data = await featureService.getFeature(sortType, searchName);
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

    const handleChangeSortType = async (event) => {
        setSortType(event.target.value);
    }

    const handleChangeSearchName = (event) => {
        setSearchName(event.target.value);
    }

    const handleSearchName = async (e) => {
        if (e.key === 'Enter') {
            await getProductList();
        }
    }

    const handleResetSearchFilter = async () => {
        setSearchName("");
        setSortType("");
        await getProductList();
    }

    useEffect(() => {
        getProductList();
    }, [sortType])


    return (
        <>
            <div className="products container">
                <hr className="mb-5"/>
                <div className="product-type-search-div mt-2 mb-2">
                    <button className="product-type-btn" onClick={handleChangeProductTypeBirthday}>Sinh nhật <i
                        className="fa-solid fa-gift"/></button>
                    <button className="product-type-btn" onClick={handleChangeProductTypeEvents}>Dịp <i
                        className="fa-solid fa-calendar-days"/></button>
                    <button className="product-type-btn" onClick={handleChangeProductTypePlants}>Hoa và cây <i
                        className="fa-brands fa-pagelines"/></button>
                    <input type="text" className="search-input" placeholder="Nhập tên sản phẩm"
                           onChange={(event => handleChangeSearchName(event))}
                           onKeyDown={handleSearchName}
                    />
                    <button className="product-type-btn" onClick={handleResetSearchFilter}>Xóa bộ lọc </button>

                    <div className="search-option-wrapper gap-2">
                        <select onChange={event => handleChangeSortType(event)}
                                name="price-sort" id="price-sort">
                            <option value="" className="price-sort-opt">Mặc định</option>
                            <option value="asc" className="price-sort-opt">Giá tăng dần</option>
                            <option value="desc" className="price-sort-opt">Giá giảm dần</option>
                        </select>
                    </div>
                </div>
                <div className="row product-list">
                    {
                        !products &&
                        <span className="fst-italic">Không có kết quả</span>
                    }

                    {
                        products &&
                        products.map((temp, index) => {
                            return (
                                <div key={index} className="col-xxl-2 col-lg-3 col-md-4 col-sm-4 mb-5 mt-3"
                                     style={{textAlign: "center"}}>
                                    <LazyLoad threshold={0.85}>
                                        <MyCard
                                            url={temp.pictureUrl}
                                            name={temp.name}
                                            price={new Intl.NumberFormat().format(temp.price)}
                                            id={temp.id}
                                        />
                                    </LazyLoad>
                                </div>
                            )
                        })
                    }
                </div>
                <hr/>
            </div>
        </>
    )
}
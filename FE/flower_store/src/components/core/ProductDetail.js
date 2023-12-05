import Footer from "./Footer";
import '../../style/productDetail.css';
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import * as productService from "../../service/productService";

export default function ProductDetail() {
    const [productDetail, setProductDetail] = useState();
    let [quantity, setQuantity] = useState(1);
    const {id} = useParams();

    const getProductDetail = async () => {
        const data = (await productService.getProductDetail(id)).data;
        await setProductDetail(data);
    }

    const quantityMinus = () => {
        setQuantity(quantity--);
        console.log(quantity);
    }

    const quantityAddition = () => {
        setQuantity(quantity++);
        console.log(quantity);
    }

    useEffect(() => {
        getProductDetail();
    }, [quantity]);

    if (!productDetail) {
        return null;
    }

    return (
        <>
            <div className="container">
                <div className="detail-title">Chi tiết sản phẩm</div>
                <Link to="/" className="back-to-main-page-link"> <i className="fas fa-angle-left me-2"/> Quay lại trang chủ </Link>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6">
                        <img
                            src={productDetail.pictureUrl}
                            alt="detail" style={{height: "auto", width: "100%"}}/>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-detail mb-3 fw-bold">Tên sản phẩm: {productDetail.name}</div>
                        <div
                            className="product-detail mb-3 fw-medium">Giá: {new Intl.NumberFormat().format(productDetail.price)} đ
                        </div>
                        <div className="product-des-content mb-3">
                            {productDetail.description}
                        </div>
                        <div className="product-detail mb-3">
                            <span>Số lượng: </span>
                            <button className="quantity-btn-minus" onClick={quantityMinus}> -</button>
                            <input className="quantity-input" type="number" value={quantity} readOnly={true}/>
                            <button className="quantity-btn-addition" onClick={quantityAddition}> +</button>
                        </div>
                        <div className="product-detail text-center mb-3">
                            <button className="add-to-cart-btn mt-5">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
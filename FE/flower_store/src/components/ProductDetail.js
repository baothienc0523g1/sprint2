import Footer from "./Footer";
import '../style/productDetail.css';
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as productService from "../service/productService";
import {toast} from "react-toastify";
import * as securityService from "../service/securityService";
import {getUsernameByJwt} from "../service/securityService";
import {useDispatch} from "react-redux";
import {addToCart} from "../provider/actions";

export default function ProductDetail() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [productDetail, setProductDetail] = useState();
    const [quantity, setQuantity] = useState(1);
    const flag = securityService.getAccessToken() != null;
    const dispatch = useDispatch();


    const getProductDetail = async () => {
        const data = (await productService.getProductDetail(id)).data;
        await setProductDetail(data);
    }

    const quantityMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        } else {
            toast.warn("Số lượng sản phẩm không hợp lệ");
        }
    }

    const quantityAddition = () => {
        if (flag) {
            if (quantity <= 9) {
                setQuantity(quantity + 1);
                if (quantity === 9) {
                    toast.info("Nếu muốn đặt số lượng lớn, vui lòng liên hệ QTV để được hỗ trợ!");
                }
            }
        } else {
            toast.success("Vui lòng đăng nhập!");
            navigate("/login");
        }

    }

    const handleAddProductToCart = async () => {
        if (flag) {
            const username = getUsernameByJwt();
            dispatch(addToCart(username, id, quantity));
            toast.success("Thêm vào giỏ hàng thành công!");
        } else {
            toast.success("Vui lòng đăng nhập!");
            navigate("/login");
        }
    }

    const backToLastPage = () => {
        navigate(-1);
    }

    useEffect(() => {
        getProductDetail();
    }, [quantity]);

    if (!productDetail) {
        return null;
    }

    return (
        <>
            <div className="container product-detail-wrapper">
                <div className="detail-title">Chi tiết sản phẩm</div>
                <i onClick={backToLastPage} className="back-to-main-page-link"> <i
                    className="fas fa-angle-left me-2"/> Quay lại trang
                    trước </i>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6">
                        <img className="product-detail-img" src={productDetail.pictureUrl} alt="detail"
                             style={{height: "auto", width: "100%"}}/>
                    </div>
                    <div className="col-lg-6 product-des">
                        <div className="product-detail mb-3 fw-normal">Tên sản phẩm: <span
                            className="fw-bolder">{productDetail.name}</span></div>
                        <div className="product-detail mb-3 fw-normal">Mã sản phẩm: <span
                            className="fw-bold">{productDetail.code}</span></div>
                        <div className="product-detail mb-3 fw-normal">Loại sản phẩm: <span
                            className="fw-bold">{productDetail.productTypeName}</span></div>
                        <div
                            className="product-detail mb-3 fw-bolder">Giá: {new Intl.NumberFormat().format(productDetail.price)} đ
                        </div>
                        <div className="product-des-content mb-3">
                            {productDetail.description}
                        </div>
                        <div className="product-detail mb-3">
                            <span>Số lượng: </span>
                            <button className="quantity-btn-minus" onClick={quantityMinus}> -
                            </button>
                            <input className="quantity-input" type="number" value={quantity} readOnly={true}/>
                            <button className="quantity-btn-addition" onClick={quantityAddition}> +</button>
                        </div>
                        <div className="product-detail text-center mb-3">
                            <button onClick={handleAddProductToCart} className="add-to-cart-btn mt-5">Thêm vào giỏ
                                hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
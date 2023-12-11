import {Link} from "react-router-dom";
import Footer from "./Footer";
import '../style/cart.css';
import {useEffect, useState, useContext} from "react";
import * as cartService from "../service/cartService";
import {getUsernameByJwt} from "../service/securityService";
import {toast} from "react-toastify";

export default function Cart() {
    const [cart, setCart] = useState([]);
    const [cartTotalCost, setCartTotalCost] = useState(+0);
    const [cartCustomerName, setCartCustomerName] = useState("");
    const [cartCustomerAddress, setCartCustomerAddress] = useState("");
    const [cartTotalITemQuantity, setCartTotalItemQuantity] = useState(+0);

    const getCart = async () => {
        const userCart = await cartService.getCart();
        await setCart(userCart);
    }

    const getCartTotalCost = () => {
        let totalCost = +0;
        cart.map(temp => {
            totalCost += +temp.productQuantity * temp.productPrice;
        })
        setCartTotalCost(totalCost);
    }

    const getCartTotalItem = () => {
        let items = +0;
        cart.map(temp => {
            items += +temp.productQuantity;
        })
        setCartTotalItemQuantity(items);
    }

    const getCustomerAddress = () => {
        if (cart.length > 0) {
            let customerAddress = cart[0].address;
            setCartCustomerAddress(customerAddress);
        } else {
            return null;
        }
    }

    const handleRemoveFromCart = async (productId, productName) => {
        const username = getUsernameByJwt();
        const status = await cartService.removeProductFromCart(username, productId);

        if (status === 200) {
            toast("Xóa sản phẩm " + productName + " ra khỏi giỏ hàng!");
        } else {
            toast.warn("Lỗi máy chủ, vui nòng niên hệ QTV để được hỗ chợ!");
        }
    }

    useEffect(() => {
        getCart();
        getCartTotalItem();
        getCartTotalCost();
        getCustomerAddress();
    }, [])

    if (!cart) {
        return null;
    }

    if (cart.length === 0) {
        return (<h1>CHƯA CÓ ĐỒ BÀY ĐẶT VÔ GIỎ HÀNG</h1>)
    }

    return (
        <>
            <section className="cart-wrapper h-100 h-custom mt-5" style={{backgroundColor: "#eee"}}>
                <div className="container h-100 py-5">
                    <h3 className="text-center cart-title mt-5">Giỏ hàng</h3>
                    <Link to="/" className="cart-link-child">
                        <i className="fas fa-angle-left me-2"/>
                        Tiếp tục mua hàng
                    </Link>
                    <div className="row d-flex justify-content-center align-items-center h-100 mt-3">
                        <div className="col">
                            <div className="card shopping-cart" style={{borderRadius: 15}}>
                                <div className="card-body text-black">
                                    <div className="row">
                                        <div className="col-lg-6 px-5 py-4">
                                            <h3 className="mb-5 pt-2 text-center fw-bold cart-title">
                                                Sản phẩm
                                            </h3>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="flex-grow-1 ms-3 mt-5">
                                                    {
                                                        cart.map(temp => {
                                                            return (
                                                                <div className="row mb-3">
                                                                    <div className="col-lg-3">
                                                                        <img
                                                                            src={temp.productPicture}
                                                                            className="cart-product-img"
                                                                            alt="Generic placeholder image"/>
                                                                    </div>
                                                                    <div
                                                                        className="d-flex align-items-center col-lg-9 row mt-3">
                                                                        <div className="d-flex">
                                                                            <div>
                                                                                <h5 className="text-primary"> Sản
                                                                                    phẩm: {temp.productName}</h5>
                                                                            </div>
                                                                            <div className="ms-auto">
                                                                                <Link onClick={() => handleRemoveFromCart(temp.productId, temp.productName)}
                                                                                   className="fa-solid fa-trash cart-trash-btn"/>
                                                                            </div>

                                                                        </div>
                                                                        <p className="fw-bold mb-0 me-5 pe-3 col-lg-6 col-md-6 col-sm-6">
                                                                            Giá: {new Intl.NumberFormat().format(temp.productPrice)} .đ
                                                                            / 1 sp</p>
                                                                        <div
                                                                            className="d-flex col-lg-6 col-md-6 col-sm-6 cart-quantity-div">
                                                                            <button
                                                                                className="cart-minus-btn"> -
                                                                            </button>
                                                                            <input
                                                                                className="fw-bold text-black cart-quantity-input"
                                                                                min={0}
                                                                                defaultValue={temp.productQuantity}
                                                                                type="number"
                                                                                readOnly={true}/>
                                                                            <button
                                                                                className="cart-addition-btn"> +
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                    <hr className="mt-2 mb-2"/>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 px-5 py-4">
                                            <h3 className="mb-5 pt-2 text-center fw-bold cart-title">
                                                Thanh toán
                                            </h3>
                                            <hr
                                                className="mb-4"
                                                style={{height: 2, backgroundColor: "#1266f1", opacity: 1}}/>
                                            <div className="d-flex justify-content-between px-x">
                                                <p className="fw-bold">Giảm giá:</p>
                                                <p className="fw-bold">0 .đ</p>
                                            </div>
                                            <div
                                                className="d-flex justify-content-between p-2 mb-2"
                                                style={{backgroundColor: "#e1f5fe"}}>
                                                <h5 className="fw-bold mb-0">Tổng cộng: </h5>
                                                <h5 className="fw-bold mb-0">{new Intl.NumberFormat().format(cartTotalCost)} .đ</h5>
                                            </div>
                                            <hr
                                                className="mb-4"
                                                style={{height: 2, backgroundColor: "#1266f1", opacity: 1}}/>
                                            <p className="fw-bold">
                                                Giao hàng tới:
                                                <Link to="/" className="float-lg-end cart-address-change">Thay
                                                    đổi</Link>
                                            </p>
                                            <h5> - Điện thoại</h5>
                                            <p></p>

                                            <div className="row">
                                                <button
                                                    type="button"
                                                    className="col-lg-6 col-md-6 col-sm-12 cart-confirm-buy-btn">
                                                    Mua hàng ( sản phẩm!)
                                                </button>
                                                <h5
                                                    className="col-lg-6 col-md-6 col-sm-12 fw-light cart-link">
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
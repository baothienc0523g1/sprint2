import {Link} from "react-router-dom";
import Footer from "./Footer";
import '../style/cart.css';
import {useEffect, useState} from "react";
import * as cartService from "../service/cartService";
import {getUsernameByJwt} from "../service/securityService";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {removeProducts} from "../provider/actions";

function Cart() {
    const [cart, setCart] = useState([]);
    const [flag, setFlag] = useState(false);

    const dispatch = useDispatch();

    const getCart = async () => {
        const userCart = await cartService.getCart();
        await setCart(userCart);
    }
    useSelector(state => state.reducers);
    const totalItem = useSelector(state => state.reducers.totalItem)

    const handleRemoveFromCart = async (productName, productId) => {
        const username = getUsernameByJwt();
        dispatch(removeProducts(username, productId));
        toast("Xóa sản phẩm " + productName + " ra khỏi giỏ hàng!");
        setFlag(!flag);
    }

    useEffect(() => {
        getCart();
    }, [totalItem])

    return (
        <>
            <section className="cart-wrapper h-100 h-custom mt-2" style={{backgroundColor: "#eee"}}>
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
                                            {
                                                cart.length === 0 && <span className="fst-italic">Chưa cóa sản phẩm nào</span>
                                            }
                                            {
                                                cart.length > 0 &&
                                                <div className="d-flex align-items-center mb-5">
                                                    <div className="flex-grow-1 ms-3 mt-5">
                                                        {
                                                            cart.length > 0 && cart.map((temp, index) => {
                                                                return (
                                                                    <div className="row mb-3 gap-4" key={index}>
                                                                        <div className="d-flex gap-2 col-lg-3">

                                                                            <img
                                                                                src={temp.productPicture}
                                                                                className="cart-product-img"
                                                                                alt="Generic placeholder image"/>
                                                                        </div>
                                                                        <div
                                                                            className="d-flex gap-2 align-items-center col-lg-9 row mt-3">
                                                                            <div className="d-flex">
                                                                                <div>
                                                                                    <h5 className="text-primary"> <span>Sản
                                                                                    phẩm: </span>
                                                                                        <Link className="cart-product-name"
                                                                                              to={`/detail/${temp.productId}`}>
                                                                                            {temp.productName}
                                                                                        </Link>
                                                                                    </h5>
                                                                                </div>
                                                                                <div className="ms-auto">
                                                                                    <i onClick={() => handleRemoveFromCart(temp.productName, temp.productId)}
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
                                            }

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
                                                <h5 className="fw-bold mb-0">{new Intl.NumberFormat().format(3333)} .đ</h5>
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
                                                    Mua hàng ({totalItem} sản phẩm!)
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

export default Cart;
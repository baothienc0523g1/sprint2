import {Link, useNavigate} from "react-router-dom";
import Footer from "./Footer";
import '../style/cart.css';
import {useEffect, useState} from "react";
import {getUsernameByJwt} from "../service/securityService";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, minusFromCart, removeProducts} from "../provider/actions";
import {Modal} from "react-bootstrap";
import MyPayPalV2 from "./MyPayPalV2";

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = getUsernameByJwt();

    const [msgModalShow, setMsgModalShow] = useState(false);
    const [payModalShow, setPayModalShow] = useState(false);
    const [orderMsg, setOrderMsg] = useState("");

    const totalItem = useSelector(state => state.reducers.totalItem)
    const cart = useSelector(state => state.reducers.productArr);
    const address = useSelector(state => state.reducers.address);
    const phoneNumber = useSelector(state => state.reducers.phoneNumber);
    const totalPrice = useSelector(state => state.reducers.totalPrice);

    const handleRemoveFromCart = async (productName, productId) => {
        const username = getUsernameByJwt();
        dispatch(removeProducts(username, productId));
        toast("Xóa sản phẩm " + productName + " ra khỏi giỏ hàng!");
    }

    const handleAddition = (productId) => {
        dispatch(addToCart(username, productId, 1));
    }

    const handleMinus = (productId) => {
        dispatch(minusFromCart(username, productId, 1));
    }

    const isAuthenticated = () => {
        if (!username) {
            navigate("/login");
        }
    }

    const handlePayModalClose = () => setPayModalShow(false);

    const handlePayModalShow = () => {
        setPayModalShow(true);
        setMsgModalShow(false);
    };
    const handleMsgModalShow = () => setMsgModalShow(true);
    const handleMsgModalClose = () => setMsgModalShow(false);

    const handleChangeOrderMsg = (event) => {
        if (orderMsg.length <= 1000) {
            setOrderMsg(event.target.value)
        } else {
            alert("Lời nhắn không được vượt quá 1000 ký tự")
        }
    }

    useEffect(() => {
        isAuthenticated();
    }, [totalItem, totalPrice, payModalShow])

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
                                            <hr className="mb-4"
                                                style={{height: 2, backgroundColor: "#5e5c4d", opacity: 1}}/>
                                            {
                                                totalItem === 0 &&
                                                <span className="fst-italic">Chưa cóa sản phẩm nào</span>
                                            }

                                            {
                                                totalItem > 0 &&
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
                                                                                    className="cart-minus-btn"
                                                                                    onClick={() => handleMinus(temp.productId)}
                                                                                > -
                                                                                </button>
                                                                                <input
                                                                                    className="fw-bold text-black cart-quantity-input"
                                                                                    min={0}
                                                                                    value={temp.productQuantity}
                                                                                    type="number"
                                                                                    readOnly={true}/>
                                                                                <button
                                                                                    className="cart-addition-btn"
                                                                                    onClick={() => handleAddition(temp.productId)}> +
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
                                            <hr className="mb-4"
                                                style={{height: 2, backgroundColor: "#5e5c4d", opacity: 1}}/>

                                            {
                                                totalItem > 0 &&
                                                <>
                                                    <div className="d-flex justify-content-between px-x">
                                                        <p className="fw-bold">Giảm giá:</p>
                                                        <p className="fw-bold">0 .đ</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between p-2 mb-2"
                                                         style={{backgroundColor: "#e1f5fe"}}>
                                                        <h5 className="fw-bold mb-0">Tổng thiệt hại: </h5>
                                                        <h5 className="fw-bold mb-0">{new Intl.NumberFormat().format(totalPrice)} .đ</h5>
                                                    </div>
                                                    <hr className="mb-4"
                                                        style={{height: 2, backgroundColor: "#5e5c4d", opacity: 1}}/>

                                                    <p className="fw-bold">
                                                        <Link to="/" className="float-lg-end cart-address-change">Thay
                                                            đổi</Link>
                                                        Giao hàng tới: {address}
                                                    </p>
                                                    <p>Điện thoại</p>
                                                    <h5>{phoneNumber}</h5>
                                                    <div className="row">
                                                        <button
                                                            type="button"
                                                            className="col-lg-6 col-md-6 col-sm-12 cart-confirm-buy-btn"
                                                            onClick={() => handleMsgModalShow()}>
                                                            Mua hàng ({totalItem})
                                                        </button>
                                                        <h5
                                                            className="col-lg-6 col-md-6 col-sm-12 fw-light cart-link">
                                                        </h5>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>

            <Modal show={msgModalShow} onHide={handleMsgModalShow}>
                <Modal.Header className="logout-modal-header" closeButton>
                    <Modal.Title>Lời nhắn</Modal.Title>
                </Modal.Header>
                <Modal.Body className="logout-modal-body">
                    <textarea className="order-msg-input"
                              onChange={event => handleChangeOrderMsg(event)}/>
                </Modal.Body>
                <Modal.Footer>
                    <button className="order-msg-btn-cancel" onClick={handleMsgModalClose}>Hủy</button>
                    <button className="order-msg-btn-confirm" onClick={handlePayModalShow}>Xác nhận</button>
                </Modal.Footer>
            </Modal>

            <Modal show={payModalShow} onHide={handlePayModalClose}>
                <Modal.Header className="logout-modal-header" closeButton>
                    <Modal.Title>Phương thức thanh toán</Modal.Title>
                </Modal.Header>
                <Modal.Body className="logout-modal-body">
                    <MyPayPalV2
                        totalCost={totalPrice}
                        closeModalFn={handlePayModalClose}
                        orderMsg={orderMsg}
                    />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Cart;
import {Link} from "react-router-dom";
import Footer from "./core/Footer";
import Header from "./Header";
import '../style/cart.css';

export default function Cart() {
    return (
        <>
            <Header/>

            <section className="cart-wrapper h-100 h-custom" style={{backgroundColor: "#eee"}}>
                <div className="container h-100 py-5">
                    <h3 className="text-center cart-title">Giỏ hàng</h3>
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
                                            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                                Sản phẩm
                                            </h3>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        src="https://www.marthastewart.com/thmb/pl6Lss6Voxz3Js6gwFXVXQ84I6Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grocery-store-flowers-to-florist-worthy-bouquet-2-0123-2000-bbf6fae0c76a416cad65b07f17ab1431.jpg"
                                                        className="img-fluid"
                                                        style={{width: 200}}
                                                        alt="Generic placeholder image"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <Link to="/" className="float-end text-black">
                                                        <i className="fas fa-times"/>
                                                    </Link>
                                                    <h5 className="text-primary">Sản phẩm: </h5>
                                                    <div className="d-flex align-items-center row">
                                                        <p className="fw-bold mb-0 me-5 pe-3 col-lg-6 col-md-6 col-sm-6">Giá: .đ</p>
                                                        <div className="col-lg-6 col-md-6 col-sm-6 cart-quantity-div">
                                                            <button
                                                                className="cart-minus-btn"
                                                            > - </button>
                                                            <input
                                                                className="fw-bold text-black cart-quantity-input"
                                                                min={0}
                                                                defaultValue={1}
                                                                type="number"
                                                                readOnly={true}
                                                            />
                                                            <button
                                                                className="cart-addition-btn"
                                                            > + </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="col-lg-6 px-5 py-4">
                                            <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                                Thanh toán
                                            </h3>
                                            <hr
                                                className="mb-4"
                                                style={{height: 2, backgroundColor: "#1266f1", opacity: 1}}
                                            />
                                            <div className="d-flex justify-content-between px-x">
                                                <p className="fw-bold">Giảm giá:</p>
                                                <p className="fw-bold">0 .đ</p>
                                            </div>
                                            <div
                                                className="d-flex justify-content-between p-2 mb-2"
                                                style={{backgroundColor: "#e1f5fe"}}
                                            >
                                                <h5 className="fw-bold mb-0">Tổng cộng: </h5>
                                                <h5 className="fw-bold mb-0">2261 .đ</h5>
                                            </div>
                                            <hr
                                                className="mb-4"
                                                style={{height: 2, backgroundColor: "#1266f1", opacity: 1}}
                                            />
                                            <p className="fw-bold">
                                                Giao hàng tới: <Link to="/"
                                                                     className="float-lg-end cart-address-change">Thay
                                                đổi</Link>
                                            </p>
                                            <h5>Tên khách hàng - Điện thoại</h5>
                                            <p>Địa chỉ </p>

                                            <div className="row">
                                                <button
                                                    type="button"
                                                    className="col-lg-6 col-md-6 col-sm-12 cart-confirm-buy-btn"
                                                >
                                                    Mua hàng (số lượng ở đây)
                                                </button>
                                                <h5
                                                    className="col-lg-6 col-md-6 col-sm-12 fw-light cart-link"
                                                >
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
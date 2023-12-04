import '../style/cart.css';
import {Link} from "react-router-dom";
import Footer from "./core/Footer";

export default function Cart() {
    return (
        <>
            <section className="cart-wrapper h-100 h-custom" style={{backgroundColor: "#eee"}}>
                <div className="container h-100 py-5">
                    <h3>Giỏ hàng</h3>
                    <div className="row d-flex justify-content-center align-items-center h-100">
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
                                                        style={{width: 150}}
                                                        alt="Generic placeholder image"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <a href="#!" className="float-end text-black">
                                                        <i className="fas fa-times"/>
                                                    </a>
                                                    <h5 className="text-primary">Samsung Galaxy M11 64GB</h5>
                                                    <h6 style={{color: "#9e9e9e"}}>Color: white</h6>
                                                    <div className="d-flex align-items-center">
                                                        <p className="fw-bold mb-0 me-5 pe-3">799$</p>
                                                        <div className="def-number-input number-input safari_only">
                                                            <button
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                className="minus"
                                                            />
                                                            <input
                                                                className="quantity fw-bold text-black"
                                                                min={0}
                                                                name="quantity"
                                                                defaultValue={1}
                                                                type="number"
                                                            />
                                                            <button
                                                                onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                className="plus"
                                                            />
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
                                                <h5 className="fw-bold mb-0">Tạm tính:</h5>
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
                                                    <Link to="/" className="cart-link-child">
                                                        <i className="fas fa-angle-left me-2"/>
                                                        Tiếp tục mua hàng
                                                    </Link>
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
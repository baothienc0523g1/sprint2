import React from "react";
import {useNavigate} from "react-router-dom";
import '../style/signup.css';

export default function Signup() {
    const navigate = useNavigate();
    const backToMainMenu = () => {
        navigate("/login")
    }

    return (
        <>
            <div id="signup-wrapper">
                <div className="signup-main-form">
                    <div className="signup-title">
                        <span className="signup-title">ĐĂNG KÝ</span>
                    </div>
                    <div className="signup-form">
                        <div className="signup-form-child-unit">
                            <input name="signup-name" type="text" placeholder="Họ và tên"
                                   className="signup-input-tag"/>
                        </div>
                        <div className="signup-form-child-unit">
                            <input name="signup-date" type="date" placeholder="Năm sinh"
                                   className="signup-input-tag"/>
                        </div>
                        <div className="signup-form-child-unit">
                            <input name="address" type="text" placeholder="Địa chỉ"
                                   className="signup-input-tag"/>
                        </div>
                        <div className="signup-form-child-unit">
                            <input name="email" type="text" placeholder="Thư điện tử"
                                   className="signup-input-tag"/>
                        </div>
                        <div className="signup-form-child-unit">
                            <input name="signup-username" type="text" placeholder="Tên tài khoản"
                                   className="signup-input-tag"/>
                        </div>
                        <div className="row">
                            <div className="signup-form-child-unit col-lg-6 col-md-6 col-sm-12">
                                <input name="signup-password" type="password" placeholder="Mật khẩu" className="signup-input-tag"/>
                            </div>
                            <div className="signup-form-child-unit col-lg-6 col-md-6 col-sm-12">
                                <input name="signup-re-password" type="password" placeholder="Xác nhận mật khẩu" className="signup-input-tag"/>
                            </div>
                        </div>
                        <div className="row mt-4" id="signup-login-btn-div">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <button type="submit" className="signup-cancel-btn" onClick={backToMainMenu}>
                                    Quay lại
                                </button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <button type="submit" className="signup-confirm-btn">
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
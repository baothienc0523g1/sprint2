import '../style/login.css';
import React from "react";
import FacebookLogin from 'react-facebook-login';

export default function Login() {
    return (
        <div id="wrapper">
            <div className="main-form">
                <div className="login-title">
                    <span className="login-title">ĐĂNG NHẬP</span>
                </div>
                <div className="login-form">
                    <div className="form-child-unit">
                        <input name="username" type="text" placeholder="Tên tài khoản"
                               className="input-tag"/>
                    </div>
                    <div className="form-child-unit">
                        <input name="password" type="password" placeholder="Mật khẩu" className="input-tag"/>
                    </div>
                    <div className="form-child-btn" id="login-btn-div">
                        <div className="login-btn-div">
                            <button type="submit" className="login-btn">
                                Đăng nhập
                            </button>
                        </div>
                        <div className="login-with-fb-btn">
                            <FacebookLogin
                                appId="277886178584824"
                                fields="name,email,picture"
                                callback={null}
                                onFailure={null}
                                cssClass="login-btn"
                                icon=<i className="fa-brands fa-facebook"/>
                            style={{color: "#ffffff"}}
                            textButton=" Đăng nhập bằng Facebook"
                            />
                        </div>
                    </div>
                    <div className="form-child-option">
                        <p className="login-text" id="back-to-main-div"> Quay về</p>
                        <p className="login-text">Bạn chưa có tài khoản?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
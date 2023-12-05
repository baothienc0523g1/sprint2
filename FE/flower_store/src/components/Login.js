import '../style/login.css';
import React, {useState} from "react";
import FacebookLogin from 'react-facebook-login';
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {toast} from "react-toastify";
import * as securityService from "../service/securityService";
import {addAccessToken} from "../service/securityService";

export default function Login() {
    const navigate = useNavigate();
    const initUser = {
        username: "",
        password: ""
    };

    const [userInit, setUserInit] = useState({initUser});

    const wrongFormatMsg = "Trường này không được chứa ký tự đặc biệt";
    const wrongLengthFormatMsg = "Trường này phải có ít nhất 4 ký tự";
    const trimFormat = "Trường này không được chứa khoảng trắng";
    const loginValidator = {
        username: yup.string().min(4, wrongLengthFormatMsg)
            .matches(/^[a-zA-Z0-9]+$/, wrongFormatMsg)
            .trim(trimFormat),
        password: yup.string().min(4, wrongLengthFormatMsg)
            .trim(trimFormat),
    };


    /*Handle: username, password, submit */
    const handleChangeUsername = (events) => {
        setUserInit({
            ...userInit,
            username: events.target.value
        })
    }

    const handleChangePassword = (events) => {
        setUserInit({
            ...userInit,
            password: events.target.value
        })
    }
    const doLogin = async () => {
        const userRequired = "Vui lòng điền tài khoản!";
        const passwordRequired = "Vui lòng điền mật khẩu!";
        const userAndPassRequired = "Vui lòng điền tài khoản và mật khẩu!";

        if (userInit.username === undefined && userInit.password === undefined) {
            toast.warn(userAndPassRequired);
        } else if (userInit.password === undefined) {
            toast.warn(passwordRequired);
        } else if (userInit.username === undefined) {
            toast.warn(userRequired);
        } else if (userInit.username.length === 0 && userInit.password.length === 0) {
            toast.warn(userAndPassRequired);
        } else if (userInit.password.length === 0) {
            toast.warn(passwordRequired);
        } else if (userInit.username.length === 0) {
            toast.warn(userRequired);
        } else {
            try {
                const res = await securityService.doLogin(userInit);
                const status = res.status;
                if (status === 200) {
                    toast("Đăng nhập thành công!!");
                    addAccessToken(res.data.jwtToken);
                    navigate("/");
                } else {
                    toast.error("Đăng nhập thất bại, sai tài khoản hoặc mật khẩu!");
                }
            } catch (e) {
                toast.error("Đăng nhập thất bại, sai tài khoản hoặc mật khẩu!");
            }
        }
    };

    return (
        <div id="wrapper">
            <div className="main-form">
                <div className="login-title">
                    <span className="login-title">ĐĂNG NHẬP</span>
                </div>
                <div className="login-form">
                    <Formik
                        initialValues={userInit}
                        validationSchema={yup.object(loginValidator)}
                        onSubmit={doLogin}
                    >
                        <Form>
                            <div className="form-child-unit">
                                <Field onChange={(event) => handleChangeUsername(event)} name="username" type="text"
                                       placeholder="Tên tài khoản" className="input-tag"/>
                                <ErrorMessage name="username" component="div" className="form-err-msg"/>
                            </div>
                            <div className="form-child-unit">
                                <Field onChange={(event) => handleChangePassword(event)} name="password" type="password"
                                       placeholder="Mật khẩu" className="input-tag"/>
                                <ErrorMessage name="password" component="div" className="form-err-msg"/>
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
                        </Form>
                    </Formik>
                    <div className="form-child-option">
                        <p className="login-text" id="back-to-main-div"> Quay về <Link className="a-link" to={"/"}>Trang
                            chủ</Link></p>
                        <p className="login-text">Bạn chưa có tài khoản? <Link className="a-link" to={"/signup"}>Đăng
                            ký</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
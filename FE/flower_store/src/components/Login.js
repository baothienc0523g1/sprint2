import '../style/login.css';
import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {toast} from "react-toastify";
import * as securityService from "../service/securityService";
import {addAccessToken, getAccessToken, getUsernameByJwt} from "../service/securityService";
import {LoginSocialFacebook} from 'reactjs-social-login';
import {Button, Modal} from "react-bootstrap";

export default function Login() {

    const [fbLoginModalShow, setFbLoginModalShow] = useState(false);
    const handleShowFbLoginModal = () => setFbLoginModalShow(true);
    const initFbUser = {
        name: "",
        email: "",
    }
    const [initFb, setInitFb] = useState({initFbUser});
    const handleCloseFbLoginModal = () => {
        setFbLoginModalShow(false);
    };


    const navigate = useNavigate();
    const initUser = {
        username: "",
        password: ""
    };

    const username = getUsernameByJwt();

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

    const handleChangeUsername = (events) => {
        setUserInit({
            ...userInit,
            username: events.target.value
        })
    };

    const handleChangePassword = (events) => {
        setUserInit({
            ...userInit,
            password: events.target.value
        })
    };

    const isAuthenticated = () => {
        if (username) {
            navigate("/");
        }
    };

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
                    navigate(-1);
                } else {
                    toast.error("Đăng nhập thất bại, sai tài khoản hoặc mật khẩu!");
                }
            } catch (e) {
                toast.error("Đăng nhập thất bại, sai tài khoản hoặc mật khẩu!");
            }
        }
    };

    const handleSetFbUserInfo = async (resolve) => {
        await setInitFb({
            name: resolve.data.name,
            email: resolve.data.email,
        })
        await handleShowFbLoginModal();
    }

    const loginWithFbButtonHandle = async () => {
        try {
            const res = await securityService.loginWithFb(
                {
                    fullName: initFb.name,
                    facebookAddress: initFb.email,
                }
            )
            if (res.status === 200) {
                toast("Đăng nhập thành công!!");
                await securityService.addAccessToken(res.data.jwtToken);
                navigate(-1);
            }
        } catch (err) {
            toast.error("Đăng nhập thất bại!");
        }
    }

    useEffect(() => {
        isAuthenticated();
    }, []);

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
                                <div className="login-with-fb">
                                    <LoginSocialFacebook
                                        className="login-with-fb-btn"
                                        appId="316156344649446"
                                        onResolve={(resolve) => {
                                            handleSetFbUserInfo(resolve);
                                        }}
                                        onReject={err => {
                                            console.log(err);
                                        }}>
                                        <button type="button" className="login-btn">
                                            <i className="fa-brands fa-facebook"/>
                                            <span> Đăng nhập với Facebook</span>
                                        </button>
                                    </LoginSocialFacebook>
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

            <Modal show={fbLoginModalShow} onHide={handleCloseFbLoginModal}>
                <Modal.Header closeButton className="logout-modal-header">
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Xin chào: <span className="fw-bold">{initFb.name}</span>,
                    <br/>
                    bạn có muốn đăng nhập thông qua <span className="fw-bold">{initFb.email}</span> không?
                </Modal.Body>
                <Modal.Footer>
                    <button className="logout-btn-modal-cancel" onClick={handleCloseFbLoginModal}
                            style={{width: "18%"}}>
                        Hủy
                    </button>
                    <button className="logout-btn-modal-confirm" onClick={loginWithFbButtonHandle}
                            style={{width: "18%"}}>
                        Có
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
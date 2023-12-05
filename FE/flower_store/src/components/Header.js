import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/header.css'
import {useNavigate, NavLink, Link} from "react-router-dom";
import * as securityService from "../service/securityService";
import {useEffect, useState} from "react";

export default function Header() {
    const navigate = useNavigate();
    const [userFullname, setUserFullname] = useState();

    const getUserFullname = async () => {
        const name = await securityService.getUserFullnameByJwt();
        setUserFullname(name);
    };

    const forwardToLogin = () => {
        navigate("/login");
    }

    const forwardToCart = () => {
        navigate("/cart");
    }

    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const doLogout = () => {

    }

    useEffect(() => {
        getUserFullname();
    }, [userFullname])

    return (
        <>
            <div className="header">
                <div className="notification">
                    <div className="notification-text">Khuyến mãi 99% đến hết 2099</div>
                </div>
                <Navbar expand="lg" className="bg-white">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/"><img className="header-logo" src="/store_logo.png"
                                              alt="logo"/></Link></Navbar.Brand>
                        <div className="vertical-line"></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/c" className="nav-link" style={({isActive}) => ({
                                    color: isActive ? '#282c34' : 'gray', fontWeight: isActive ? 'bolder' : 'normal'
                                })}>Sinh nhật</NavLink>
                                <NavLink to="/a" className="nav-link" style={({isActive}) => ({
                                    color: isActive ? '#282c34' : 'gray', fontWeight: isActive ? 'bolder' : 'normal'
                                })}>Dịp</NavLink>
                                <NavLink to="/b" className="nav-link" style={({isActive}) => ({
                                    color: isActive ? '#282c34' : 'gray', fontWeight: isActive ? 'bolder' : 'normal'
                                })}>Hoa & Cây</NavLink>
                            </Nav>
                            <Nav>
                                {!userFullname && <span className="navbar-text">“Đời là bông hoa, tình yêu là mật.” - Victor Hugo</span>}

                                {userFullname &&
                                    <div className="navbar-logined">
                                        <div className="header-dropdown">
                                            <button className="user-fullname">{userFullname}</button>
                                            <div className="header-dropdown-content">
                                                <Link className="dropdown-child" to="/cart">Giỏ hàng</Link>
                                                <Link className="dropdown-child" to="/cart">Thông tin cá nhân</Link>
                                                <button className="logout-btn" onClick={doLogout}>Đăng xuất</button>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {!userFullname && <button className="login-btn-main-page" onClick={forwardToLogin}>
                                    <i className="fa-solid fa-right-to-bracket fa-lg"/>
                                </button>}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <button onClick={backToTop} id="scrollToTop" title="Trở lại đầu trang">
                <i className="fas fa-arrow-up fa-lg"></i>
            </button>
        </>
    );
}
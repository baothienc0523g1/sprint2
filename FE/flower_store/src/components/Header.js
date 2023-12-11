import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/header.css'
import {useNavigate, NavLink, Link} from "react-router-dom";
import * as securityService from "../service/securityService";
import {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import {toast} from "react-toastify";

export default function Header() {
    const navigate = useNavigate();
    const [userFullname, setUserFullname] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        securityService.doLogout();
        toast("Đăng xuất thành công!");
        handleClose();
        navigate("/");
    }

    const navLinkClass = ({isActive}) => {
        return isActive ? "my-nav-link-active" : "my-nav-link-un-active";
    }

    useEffect(() => {
        getUserFullname();
    }, [userFullname, show])

    return (
        <>
            <div className="header">
                <div className="notification">
                    <div className="notification-text">Kỉ niệm xưa giờ là những thước phim dư thừa. Em tua đi tua lại để
                        làm chi nữa?
                    </div>
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
                                <NavLink to="/about" className={navLinkClass}>Liên lạc</NavLink>
                                <NavLink to="/a" className={navLinkClass}>Chính sách</NavLink>
                                <NavLink to="/a" className={navLinkClass}>Chương trình khuyến mãi</NavLink>
                            </Nav>
                            <Nav>
                                {!userFullname && <span className="navbar-text">“Đời là bông hoa, tình yêu là mật.” - Victor Hugo</span>}

                                {userFullname &&
                                    <div className="navbar-logined"
                                         style={{display: "table-cell", verticalAlign: "middle"}}>
                                        <div className="header-dropdown">
                                            <button className="user-fullname">{userFullname}</button>
                                            <div className="header-dropdown-content">
                                                <Link className="dropdown-child" to="/">Thông tin cá nhân</Link>
                                                <button className="logout-btn" onClick={handleShow}>Đăng xuất</button>
                                            </div>
                                        </div>
                                        <button onClick={forwardToCart} className="cart-btn-header"><i
                                            className="fa-solid fa-cart-shopping"/>
                                            <div className="badge badge-light" id="cart-badge">?</div>
                                        </button>
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

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className="logout-modal-header" closeButton>
                    <Modal.Title>Đăng xuất</Modal.Title>
                </Modal.Header>
                <Modal.Body className="logout-modal-body">
                    Bạn có trắc trắn muốn đăng xuất?
                </Modal.Body>
                <Modal.Footer>
                    <button className="logout-btn-modal-cancel" onClick={handleClose}>Hủy</button>
                    <button className="logout-btn-modal-confirm" onClick={doLogout}>Đăng xuất</button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
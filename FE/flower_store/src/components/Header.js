import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style/header.css'
import {useNavigate, NavLink, Link} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
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
                                    color: isActive ? '#282c34' : 'gray',
                                    fontWeight: isActive ? 'bolder' : 'normal'
                                })}>Sinh nhật</NavLink>
                                <NavLink to="/a" className="nav-link" style={({isActive}) => ({
                                    color: isActive ? '#282c34' : 'gray',
                                    fontWeight: isActive ? 'bolder' : 'normal'
                                })}>Dịp</NavLink>
                                <NavLink to="/b" className="nav-link" style={({isActive}) => ({
                                    color: isActive ? '#282c34' : 'gray',
                                    fontWeight: isActive ? 'bolder' : 'normal'
                                })}>Hoa & Cây</NavLink>
                            </Nav>
                            <Nav>
                                <span className="navbar-text">“Đời là bông hoa, tình yêu là mật.” - Victor Hugo</span>
                                <button className="login-btn-main-page" onClick={forwardToLogin}>
                                    <i className="fa-solid fa-right-to-bracket fa-lg"/>
                                </button>
                                <button className="cart-btn-header" onClick={forwardToCart}>
                                    <i className="fa-solid fa-cart-shopping fa-lg"/>
                                </button>
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
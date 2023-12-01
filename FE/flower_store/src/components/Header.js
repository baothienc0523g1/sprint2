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



    return (
        <>
            <div className="header">
                <div className="notification">
                    <div className="notification-text">Khuyến mãi 99% đến hết 2099</div>
                </div>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/"><img className="header-logo" src="/store_logo.png" alt="logo"/></Link></Navbar.Brand>
                        <div className="vertical-line"></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to="/c" className="nav-link" style={({ isActive }) => ({color: isActive ? 'white' : 'gray', background: !isActive ? '#ffffff' : '#27A4DB'})}>Sinh nhật</NavLink>
                                <NavLink to="/a" className="nav-link" style={({ isActive }) => ({color: isActive ? 'white' : 'gray', background: !isActive ? '#ffffff' : '#27A4DB'})}>Dịp</NavLink>
                                <NavLink to="/b" className="nav-link" style={({ isActive }) => ({color: isActive ? 'white' : 'gray', background: !isActive ? '#ffffff' : '#27A4DB'})}>Hoa & Cây</NavLink>
                            </Nav>
                            <Nav>
                                <span className="navbar-text">“Đời là bông hoa, tình yêu là mật.” - Victor Hugo</span>
                                <button className="login-btn-main-page" onClick={forwardToLogin}>
                                    <i className="fa-solid fa-right-to-bracket fa-lg"/>
                                </button>
                                <button className="cart-header" onClick={forwardToCart}>
                                    <i className="fa-solid fa-cart-shopping fa-lg"/>
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}
import React, {useState} from "react";
import Footer from "../Footer";
import '../../style/headerLink/about.css'
import Banner from "../Banner";
import {Button, Modal} from "react-bootstrap";

export default function About() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="about-wrapper">
            <Banner/>
            <div className="about-main">
                <div className="about-left">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1647773813415!2d106.60235677574084!
                    3d17.45182568344646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314756958da4d9bb%3A0xb794e9
                    54f37764b4!2zMzYgVHLhuqduIE5o4bqtdCBEdeG6rXQsIMSQ4bupYyBOaW5oLCDEkOG7k25nIEjhu5tpLCBRdeG6o25nIELDrG
                    5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1702211549721!5m2!1svi!2s"
                        allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="iframe-map"/>
                </div>
                <div className="about-right">
                    <p className="about-us-title"> Liên lạc với chúng tôi!</p>
                    <div className="about-form-wrapper">
                        <div>
                            <form action="">
                                <div className="about-form-child">
                                    <div className="about-form-label">
                                        <label className="about-form-label-child" htmlFor="name">Họ và tên</label>
                                    </div>
                                    <div className="about-form-input">
                                        <input className="about-form-input-child" id="name" type="text"/>
                                    </div>
                                </div>
                                <div className="about-form-child">
                                    <div className="about-form-label">
                                        <label className="about-form-label-child" htmlFor="email">Email</label>
                                    </div>
                                    <div className="about-form-input">
                                        <input className="about-form-input-child" id="email" type="email"/>
                                    </div>
                                </div>

                                <div className="about-form-child">
                                    <div className="about-form-label">
                                        <label className="about-form-label-child" htmlFor="msg">Lời nhắn</label>
                                    </div>
                                    <div className="about-form-input">
                                        <textarea className="about-form-input-child" id="msg" rows={5}/>
                                    </div>
                                </div>
                                <div className="about-form-child">
                                    <button className="about-btn" type="button" onClick={handleShow}>Gửi</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="about-form-child2">
                                <i className="fa-solid fa-phone"/> <span>+84 XXX XXX</span>
                            </div>
                            <div className="about-form-child2">
                                <i className="fa-solid fa-envelope"/> <span>daisy@gmail.com</span>
                            </div>
                            <div className="about-form-child2 about-social">
                                <i className="fa-brands fa-facebook"/>
                                <i className="fa-brands fa-square-instagram"/>
                                <i className="fa-brands fa-github"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="logout-modal-header" closeButton>
                    <Modal.Title>Phản hồi</Modal.Title>
                </Modal.Header>
                <Modal.Body className="logout-modal-body">
                    Cảm ơn bạn đã phản hồi,
                    phản hồi của bạn sẽ được ngó lơ.
                </Modal.Body>
                <Modal.Footer>
                    <button className="logout-btn-modal-confirm" onClick={handleClose}>???</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
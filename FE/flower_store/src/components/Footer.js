import '../style/footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="footer-heading">DAISY</h4>
                            <div className="footer-underline"/>
                            <p>
                                Mỗi ngày một đóa hoa
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Liên kết</h4>
                            <div className="footer-underline"/>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    Về chúng tôi
                                </Link>
                            </div>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    Liên lạc
                                </Link>
                            </div>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    Blogs
                                </Link>
                            </div>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    Địa chỉ
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Mua ngay</h4>
                            <div className="footer-underline"/>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    Sản phẩm bán chạy
                                </Link>
                            </div>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    Sản phẩm mới
                                </Link>
                            </div>
                            <div className="mb-2">
                                <a href="#" className="text-white">
                                    Sản phẩm nổi bật
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Liên lạc với chúng tôi</h4>
                            <div className="footer-underline"/>
                            <div className="mb-2">
                                <p>
                                    <a href="https://maps.app.goo.gl/kZBeZ3ypPbthqxb16"
                                       target="_blank"
                                       className="footer-map-link">
                                        <i className="fa fa-map-marker"/>
                                        36 Đ. Trần Nhật Duật, Đức Ninh, Đồng Hới, Quảng Bình
                                    - 510000
                                    </a>
                                </p>
                            </div>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    <i className="fa fa-phone"/> +84 XXX-XXXX
                                </Link>
                            </div>
                            <div className="mb-2">
                                <Link to="/" className="text-white">
                                    <i className="fa fa-envelope"/> daisy@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p>
                                © 2023 - Daisy. Mọi bản quyền được bảo lưu bởi Daisy.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="social-media">
                                <span>Kết nối:</span>
                                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                                   href="https://www.facebook.com/5qua.chuoi9"
                                   target="_blank" role="button"
                                   data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"/></a>

                                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                                   href="https://www.instagram.com/donefor.thien/"
                                   target="_blank" role="button"
                                   data-mdb-ripple-color="dark"><i className="fab fa-instagram"/></a>

                                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                                   href="https://github.com/baothienc0523g1/"
                                   target="_blank" role="button"
                                   data-mdb-ripple-color="dark"><i className="fab fa-github"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import '../style/footer.css'

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
                                <a href="" className="text-white">
                                    Về chúng tôi
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    Liên lạc
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    Blogs
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    Địa chỉ
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Mua ngay</h4>
                            <div className="footer-underline"/>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    Sản phẩm bán chạy
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    Sản phẩm mới
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    Sản phẩm nổi bật
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    Giỏ hàng
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Niên nạc với chúng tôi</h4>
                            <div className="footer-underline"/>
                            <div className="mb-2">
                                <p>
                                    <i className="fa fa-map-marker"/> 280 Đ. Trần Hưng Đạo, An Hải Tây, Sơn Trà, Đà Nẵng
                                    - 550000
                                </p>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    <i className="fa fa-phone"/> +84 XXX-XXXX
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="" className="text-white">
                                    <i className="fa fa-envelope"/> daisy@gmail.com
                                </a>
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
                                <span style={{color: "white"}}>Kết nối:</span>
                                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                                   href="https://www.facebook.com/5qua.chuoi9"
                                   target="_blank" role="button"
                                   data-mdb-ripple-color="dark"><i className="fab fa-facebook-f"
                                                                   style={{color: "white"}}/></a>

                                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                                   href="https://www.instagram.com/donefor.thien/"
                                   target="_blank" role="button"
                                   data-mdb-ripple-color="dark"><i className="fab fa-instagram"
                                                                   style={{color: "white"}}/></a>

                                <a className="btn btn-link btn-floating btn-lg text-dark m-1"
                                   href="https://github.com/baothienc0523g1/"
                                   target="_blank" role="button"
                                   data-mdb-ripple-color="dark"><i className="fab fa-github"
                                                                   style={{color: "white"}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
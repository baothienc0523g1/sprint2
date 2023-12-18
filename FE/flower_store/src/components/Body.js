import Banner from "./Banner";
import Products from "./Products";
import '../style/body.css'
import Footer from "./Footer";
import ProductsTrending from "./ProductsTrending";
import LazyLoad from "react-lazy-load";

export default function Body() {
    return (
        <div className="body-main-page">
            <Banner/>
            <ProductsTrending/>
            <LazyLoad threshold={0.55}>
                <div id="rich-text" className="row">
                    <p id="rich-text-title" className="col-xl-12">
                        <p>Chỉ sống là không đủ… </p>
                        <p>người ta phải có ánh nắng, tự do và một bông hoa nhỏ.</p>
                    </p>
                    <span id="rich-text-content" className="col-xl-12">
                        Chúng tôi tập trung vào các thiết kế hoa trang nhã và cách cắm hoa độc đáo, phù hợp cho các dịp
                        sinh nhật, cầu hôn, ngày kỷ niệm, lễ tốt nghiệp, Ngày lễ tình nhân, Ngày của Mẹ, khai trương cửa
                        hàng và các lễ kỷ niệm khác. Cung cấp bó hoa phong cách Đồng Hới, lẵng hoa, bó hoa cưới và các
                        dịch vụ thiết kế, thiết kế và tùy chỉnh hoa tinh tế khác.
                        Tự hào là trai bán hoa chuyên nghiệp với nhiều năm kinh nghiệm lựa chọn cẩn thận hoa tươi từ
                        khắp nơi trên thế giới với giá cả hợp lý, đồng thời cung cấp dịch vụ đặt hoa trực tuyến tiện lợi
                        và giao hoa miễn phí, hãy thể hiện tình cảm của mình với những đóa hoa!
                    </span>
                </div>
            </LazyLoad>
            <h1 className="main-title mb-5">Tất cả sản phẩm</h1>
            <Products/>
            <div id="introduction" className="row container mt-5 mb-5">
                <div className="col-xl-6 col-md-12">
                    <img src="https://i.pinimg.com/564x/f0/16/8b/f0168bd9f87d652979b5db3f273f1ef9.jpg"
                         id="introduction-img"
                         alt=""/>
                </div>
                <div className="col-xl-6 row">
                    <p id="introduction-title" className="col-xl-6 col-md-12">
                        <p>Thay vì tặng em một đóa hoa hồng không tàn… </p>
                        <p>thì anh sẽ tặng em một mối tình không phai.</p>
                        <hr/>
                    </p>
                    <span id="introduction-content" className="col-xl-6 col-md-6">
                        Trong một ngôi làng nhỏ, có một đàn trẻ thường xuyên tụ tập ở khu vườn hoa nhỏ. Trong đám đông,
                        có một cô gái tên là Linh, người luôn say mê bông hoa hồng trắng tinh khôi.
                        <br/>
                        <br/>
                        Mỗi buổi chiều, Linh đến vườn
                        hoa để chăm sóc những bông hoa đẹp nhất. Cô nói chuyện với chúng như người bạn thân thiết.
                        Đôi khi, Linh thậm chí cất tiếng hát những bài hát nhẹ nhàng, mà chỉ những bông hoa và cô mới
                        nghe được.
                        <br/>
                        <br/>
                        Một ngày, khi mùa xuân nở rộ, Linh phát hiện một bông hoa hồng đặc biệt. Nó có màu sắc
                        tinh khôi hơn và phát ra mùi hương ngọt ngào khác lạ. Cô quyết định dành thời gian nhiều hơn để
                        chăm sóc nó. Ngày qua ngày, bông hoa không chỉ trở nên lấp lánh mà còn phát triển mạnh mẽ.
                        Cả làng người kinh ngạc trước vẻ đẹp của bông hoa đặc biệt và đều hỏi Linh tại sao điều này có
                        thể xảy ra.
                        Tuy nhiên, Linh chỉ mỉm cười và nói, "Đẹp nhất không phải là bản thân hoa,
                        mà là tình yêu mà ta dành cho nóa."
                    </span>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
import Banner from "./Banner";
import Products from "./Products";
import '../style/body.css'
import Footer from "./Footer";

export default function Body() {

    return (
        <div className="body-main-page">
            <Banner/>
            <h1 className="main-title">Tất cả sản phẩm</h1>
            <Products/>
            <Footer/>
        </div>
    )
}
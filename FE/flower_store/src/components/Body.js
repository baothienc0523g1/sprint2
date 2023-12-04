import Banner from "./core/Banner";
import Products from "./core/Products";
import '../style/body.css'
import Footer from "./core/Footer";

export default function Body() {

    return (
        <div style={{backgroundColor: "whitesmoke"}}>
            <Banner/>
            <h1 className="main-title">Sản phẩm nổi bật</h1>
            <Products/>
            <Footer/>
        </div>
    )
}
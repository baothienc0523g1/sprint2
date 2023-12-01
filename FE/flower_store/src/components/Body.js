import Banner from "./body/Banner";
import Products from "./body/Products";
import '../style/body.css'

export default function Body() {

    return (
        <>
            <Banner/>
            <h1 className="main-title">Sản phẩm nổi bật</h1>
            <Products/>
        </>
    )
}
import {useEffect, useState} from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import * as productService from "../service/productService";
import MyCard from "./MyCard";
import '../style/products.css'

export default function ProductsTrending() {

    const [products, setProducts] = useState();

    const getTrendingFeature = async () => {
        const data = await productService.getTrendingFeature();
        await setProducts(data);
    }

    useEffect(() => {
        getTrendingFeature();
        console.log("trending product", products);
    }, [])

    if (!products) {
        return null;
    }

    return (
        <>
            <Banner/>
            <div className="container products">
                <h1 className="main-title">Sản phẩm bán chạy</h1>
                <div className="row">


                    {
                        products.length > 0 &&
                        products.map((temp, index) => {
                            return (
                                <div key={index} className="col-xxl-2 col-lg-3 col-md-4 col-sm-5 mb-5 mt-3"
                                     style={{textAlign: "center"}}>
                                    <MyCard
                                        url={temp.pictureUrl}
                                        name={temp.name}
                                        price={new Intl.NumberFormat().format(temp.price)}
                                        id={temp.id}
                                    />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer/>
        </>
    )
}
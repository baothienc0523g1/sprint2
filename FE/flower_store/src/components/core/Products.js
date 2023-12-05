import '../../style/products.css'
import MyCard from "./MyCard";
import {useEffect, useState} from "react";
import * as featureService from "../../service/productService";

export default function Products() {
    const [products, setProducts] = useState([]);

    const productList = async () => {
        const data = (await featureService.getFeature()).data;
        await setProducts(data);
    }

    useEffect(() => {
        productList();
    }, [])

    if (products.length === 0) {
        return null;
    }

    return (
        <>
            <div className="products container">
                <div className="row">
                    {
                        products.map((temp) => {
                            return (
                                <>
                                    <MyCard
                                        url={temp.pictureUrl}
                                        name={temp.name}
                                        price={new Intl.NumberFormat().format(temp.price)}
                                        id={temp.id}
                                    />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
import Footer from "./Footer";
import '../../style/productDetail.css';
import {useEffect, useState} from "react";

export default function ProductDetail() {
    let [quantity, setQuantity] = useState(1);

    const quantityMinus = () => {
        setQuantity(quantity--);
        console.log(quantity);
    }

    const quantityAddition = () => {
        setQuantity(quantity++);
        console.log(quantity);
    }

    useEffect(() => {

    }, [quantity]);

    return (
        <>
            <div className="container">
                <div className="detail-title">Chi tiết sản phẩm</div>
                <div className="row mt-5 mb-5">
                    <div className="col-lg-6">
                        <img
                            src="https://www.marthastewart.com/thmb/pl6Lss6Voxz3Js6gwFXVXQ84I6Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grocery-store-flowers-to-florist-worthy-bouquet-2-0123-2000-bbf6fae0c76a416cad65b07f17ab1431.jpg"
                            alt="detail" style={{height: "auto", width: "100%"}}/>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-detail mb-3">Tên sản phẩm:</div>
                        <div className="product-detail mb-3">Giá:</div>
                        <div className="product-des-content mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                            . Iure maxime qui voluptatem voluptates! Autem consectetur cupiditate dicta dolorem expedita
                            incidunt iusto laborum, maxime nam perferendis quidem sunt tenetur voluptatem voluptatibus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magnam numquam repellat
                            voluptates? Atque, cumque, praesentium! Ab doloremque dolorum exercitationem laudantium
                            neque omnis quaerat temporibus. Consectetur ducimus eligendi reiciendis similique! Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consequuntur distinctio eius
                            eos error quasi quidem sed similique vitae. Asperiores autem corporis in nemo nobis
                            praesentium quisquam ut voluptatem voluptates.
                        </div>
                        <div className="product-detail mb-3">
                            <span>Số lượng: </span>
                            <button className="quantity-btn-minus" onClick={quantityMinus}> -</button>
                            <input className="quantity-input" type="number" value={quantity} readOnly={true}/>
                            <button className="quantity-btn-addition" onClick={quantityAddition}> +</button>
                        </div>
                        <div className="product-detail text-center mb-3">
                            <button className="add-to-cart-btn mt-5">Thêm vào giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
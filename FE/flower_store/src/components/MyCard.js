import '../style/products.css'
import {toast} from "react-toastify";
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom";
import * as securityService from "../service/securityService";
import {useDispatch} from "react-redux";
import {addToCart} from "../provider/actions";
import LazyLoad from "react-lazy-load";
import {Spinner} from "react-bootstrap";

export default function MyCard(event) {
    const {url, name, price, id} = event;
    const flag = securityService.getAccessToken() != null;
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const productDetail = () => {
        navigate(`/detail/${id}`);
    }

    const handleAddProductToCart = async () => {
        if (flag) {
            const username = securityService.getUsernameByJwt();
            dispatch(addToCart(username, id, 1));
            toast.success("Thêm vào giỏ hàng thành công!");
        } else {
            toast.success("Vui lòng đăng nhập!");
            navigate("/login");
        }
    }

    return (
        <LazyLoad threshold={0.15} placeholder={<Spinner animation="grow" variant="secondary"/>}>
            <Card className="my-card" style={{padding: 0}} title={name}>
                <i onClick={productDetail}>
                    <Card.Img variant="top" style={{width: '100%', maxHeight: "200px", minHeight: "200px"}} src={url}/>
                </i>
                <Card.Body>
                    <Card.Title>
                        <p className="product-card-title">{name}</p>
                    </Card.Title>
                    <Card.Text style={{color: "#c27a6b"}}>
                        {price} đ
                    </Card.Text>
                    <button onClick={handleAddProductToCart} className="my-card-btn"><i
                        className="fa-solid fa-cart-plus"/>
                    </button>
                </Card.Body>
            </Card>
        </LazyLoad>
    )
}

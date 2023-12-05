import Card from 'react-bootstrap/Card';
import '../../style/products.css'
import {useNavigate} from "react-router-dom";

export default function MyCard(event) {
    const {url, name, price, id} = event;
    const navigate = useNavigate();

    const productDetail = () => {
        navigate(`/detail/${id}`);
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5 mt-3" style={{textAlign: "center"}}>
            <Card className="my-card" style={{padding: 0}} onClick={productDetail}>
                <Card.Img variant="top" style={{width: '100%', maxHeight: "400px", minHeight: "400px"}}
                          src={url}/>
                <Card.Body>
                    <Card.Title style={{color: "#c27a6b"}}>{name}</Card.Title>
                    <Card.Text style={{color: "#c27a6b"}}>
                        {price} đ
                    </Card.Text>
                    <button className="my-card-btn"><i className="fa-solid fa-cart-plus"/></button>
                </Card.Body>
            </Card>
        </div>
    )
}
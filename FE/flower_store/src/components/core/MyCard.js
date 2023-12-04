import Card from 'react-bootstrap/Card';
import '../../style/products.css'
import {useNavigate} from "react-router-dom";

export default function MyCard(event) {
    const {url, name, price} = event;
    const navigate = useNavigate();

    const productDetail = () => {
        navigate('/detail');
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3" style={{textAlign: "center"}}>
            <Card className="my-card" style={{padding: 0}} onClick={productDetail}>
                <Card.Img variant="top" style={{width: '100%', maxHeight: "300px", minHeight: "300px"}}
                          src={url}/>
                <Card.Body>
                    <Card.Title style={{color: "#c27a6b"}}>{name}</Card.Title>
                    <Card.Text  style={{color: "#c27a6b"}}>
                        {price}
                    </Card.Text>
                    <button className="my-card-btn">Thêm vào giỏ hàng</button>
                </Card.Body>
            </Card>
        </div>
    )
}
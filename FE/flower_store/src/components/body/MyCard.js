import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../style/products.css'

export default function MyCard(event) {
    const {url, name, price} = event;

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3 mt-3" style={{textAlign: "center"}}>
            <Card className="my-card" style={{padding: 0}}>
                <Card.Img variant="top" style={{width: '100%', maxHeight: "300px", minHeight: "300px"}}
                          src={url}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Button variant="btn btn-outline-primary">Thêm vào giỏ hàng</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
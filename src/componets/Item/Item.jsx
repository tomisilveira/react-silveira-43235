import './Item.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, nombre, precio, categoria, img, stock, descripcion }) => {
    return (
        <div className="card-container">

            <Card className="card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                    Precio: {precio}
                    </Card.Text>
                    <Card.Text>
                    Stock: {stock}.
                    </Card.Text>
                    <Button as={Link} to={`/item/${id}`} variant="primary">Ver</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
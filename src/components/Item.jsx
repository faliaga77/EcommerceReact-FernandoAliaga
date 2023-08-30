import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img style={{ height: "180px" }} variant="top" src={product.img} />
        <Card.Body className='card-body'>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Card>
                {product.price}
            </Card>
            <Link to={`/item/${product.id}`}>
                <Button variant="primary">Detalle del producto</Button>
            </Link>
            <ItemCount />
        </Card.Body>
    </Card>
);
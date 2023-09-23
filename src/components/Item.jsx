import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ product }) => (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img style={{ height: "180px" }} variant="top" src={product.img} />
        <Card.Body className='card-body'>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{`$${product.price}`}</Card.Text>
            <Card.Text>Stock:{product.stock}</Card.Text>
            <Link to={`/item/${product.id}`}>
                <Button variant="primary">Detalle del producto</Button>
            </Link>
        </Card.Body>
    </Card>
);
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import Container from "react-bootstrap/esm/Container";
import { ItemDetail } from "./ItemDetail";




export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState([null]);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find((product) => product.id === id);
                resolve(productById);
            }, 2000);
        });
        promise.then((data) => setProduct(data));
    }, []);

    if (!product) return <h3>Loading...</h3>;


    return (

        <Container>
            <h1>Detalle del producto</h1>
            <ItemDetail product={product} />

        </Container>
    );




};

export default ItemDetailContainer;
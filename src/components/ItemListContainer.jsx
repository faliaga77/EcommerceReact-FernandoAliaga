import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import Container from "react-bootstrap/esm/Container";
import { ItemList } from "./ItemList";



export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000)
        });

        promise.then((data) => {
            if (!id) {
                setProducts(data);
            } else {
                const productsFiltered = data.filter(
                    (product) => product.category === id);
                setProducts(productsFiltered);
            }

        });
    }, []);


    return (

        <Container className="container-style">
            <h1>Productos</h1>
            <div className="carProducts">
                <ItemList products={products} />
            </div>
        </Container>
    );




};

export default ItemListContainer;
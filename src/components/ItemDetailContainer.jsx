import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";


export const ItemDetailContainer = props => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();

        const refDoc = doc(db, "ItemCollection", id);

        getDoc(refDoc)
            .then(snapshot => {
                setProduct({ id: snapshot.id, ...snapshot.data() })
            })
            .finally(() => setLoading(false))
    }, [id])
    if (loading) return <h3>Loading...</h3>;

    return (

        <Container>
            <h1>Detalle del producto</h1>
            <ItemDetail product={product} />
        </Container>
    );

};

export default ItemDetailContainer;
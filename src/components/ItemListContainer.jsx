import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { ItemList } from "./ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = props => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const db = getFirestore();

        const refCollection = collection(db, "ItemCollection")

        const q = id ? query(refCollection, where("categoryid", "==", id)) : refCollection;
        

        getDocs(q)
           .then(snapshot => {
            // if (snapshot.size === 0) console.log("no results")
            setProducts(
                    snapshot.docs.map(doc  => {
                        return { productid: doc.id, ...doc.data() }
                    })
                )
        })
        .finally(() => {
            setLoading(false)
        })
    }, [id])

     if (loading) return <div>Loading...</div>;

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


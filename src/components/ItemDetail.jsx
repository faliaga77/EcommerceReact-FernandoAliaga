import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";



export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = count => addItem(product, count);

  return (
    <div className="carDetail">
      <img style={{ height: "180px" }} variant="top" src={product.img} alt="" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div>Precio:{`$${product.price}`}</div>
      <div>Stock:{product.stock}</div>
      <ItemCount onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;



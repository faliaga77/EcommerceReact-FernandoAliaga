import { useState } from "react";
const stock = 20;


export const ItemCount = () => {

  const [count, setCount] = useState(0);

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }

  };

  const handleIncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }

  };

  const onAdd = () => {

    alert(count);
  };

  return (
    <div className="itemCount">
      <span onClick={handleDecreaseCount}>-</span>
      <span>{count}</span>
      <span onClick={handleIncreaseCount}>+</span>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>


  )
}
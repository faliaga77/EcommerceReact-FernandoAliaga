export const ItemDetail = ({ product }) => (
  <div className="carProducts">
    <img src={product.img} />
    <h1>{product.title}</h1>
    <p>{product.description}</p>
    <div>{product.price}</div>


  </div>

);
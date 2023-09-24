import { Container, Table } from "react-bootstrap"
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


export const CheckOut = () => {
     const {items} = useContext(CartContext) 

     const total = () => 
     items.reduce((acumulador, valorActual) =>
          acumulador + valorActual.quantity * valorActual.price, 
          0
     )
     
     return (
          <Container>
               <h1>Checkout</h1>
               <Table striped bordered hover variant= "dark">
                    <thead>
                         <tr>
                              <th>Nombre</th>
                              <th></th>
                              <th>Precio</th>
                              <th>Cantidad</th>
                              <th></th>
                         </tr>
                    </thead>
                    <tbody>
                         {items.map(item => (
                              <tr key={item.id}>
                                   <td>{item.title}</td>
                                   <td>{item.price}</td>
                                   <td>{item.quantity}</td>
                            </tr>
                         ))}
                    </tbody>
                    <tfoot>
                         <tr>
                              <td>Total</td>
                         </tr>
                    </tfoot>
               </Table>
          </Container>
     )
}
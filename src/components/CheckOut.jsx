import { Container, Table } from "react-bootstrap"
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { getFirestore, collection, addDoc, updateDoc } from "firebase/firestore";



export const CheckOut = () => {

     const [formValues, setFormValues] = useState({
          name: "",
          phone: "",
          email: "",
     })

     const { items, removeItem } = useContext(CartContext)

     const total = () =>
          items.reduce((acumulador, valorActual) =>
               acumulador + valorActual.quantity * valorActual.price,
               0
          )

     const handleChange = ev => {
          setFormValues(prev => ({
               ...prev,
               [ev.target.name]: ev.target.value,
          }))
     }

     const sendOrder = () => {
          const order = {
               buter: {
                    name: "Aliaga",
                    phone: 1123541258,
                    email: "faliaga00@gamil.com",
               },
               items: items(),
               total: total(),
          };
          const db = getFirestore();
          const orderCollection = collection(db, "orders");

          addDoc(orderCollection, order).then(({ id }) => {
               if (id) {
                    alert("Su orden: " + id + "ha sido completada!");
               }
          });
     };


     return (
          <Container>
               <h1>Checkout</h1>
               <Table striped bordered hover variant="dark">
                    <thead>
                         <tr>
                              <th>Nombre</th>
                              <th>Cantidad</th>
                              <th>Precio</th>
                              <th></th>
                         </tr>
                    </thead>
                    <tbody>
                         {items.map(item => (
                              <tr key={item.id}>
                                   <td>{item.title}</td>
                                   <td>{item.quantity}</td>
                                   <td>{item.price}</td>
                                   <td>
                                        <button
                                             onClick={() => removeItem(item.id)}>Eliminar producto</button>
                                   </td>
                              </tr>
                         ))}
                    </tbody>
                    <tfoot>
                         <tr>
                              <td>Total</td>
                              <td></td>
                              <td></td>
                              <td>{total()}</td>
                         </tr>
                    </tfoot>
               </Table>
               <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                         onChange={handleChange}
                         value={formValues.name}
                         type="text"
                         name="name"
                    />
               </Form.Group>
               <Form.Group>
                    <Form.Label>Tel</Form.Label>
                    <Form.Control
                         onChange={handleChange}
                         value={formValues.phone}
                         type="text"
                         name="phone"
                    />
               </Form.Group>
               <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                         onChange={handleChange}
                         value={formValues.email}
                         type="email"
                         name="email"
                    />
               </Form.Group>
               <button onClick={sendOrder}>Realizar compra</button>
          </Container>
     )
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import {NavLink} from "react-router-dom";

import data from "../data/products.json";

const categories = data.map(product => product.category)
const uniqueCategories = new Set(categories)

export const NavBar = () => (
 <Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href='#home'>La Tienda de Ana</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href='/'>Home</Nav.Link>
       {[...uniqueCategories].map(category => (
        <Nav.Link
        as={NavLink}
        key={category}
        to={`/category/${category}`}
         >
       {category}
       </Nav.Link>
       ))}
    </Nav>
    <CartWidget/> 
  </Container>
</Navbar>

);



// export const NavBar = () => (
// <Navbar bg="dark" data-bs-theme="dark">
//   <Container>
//     <Navbar.Brand as={NavLink} to="/">La Tienda de Ana</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
//       <Nav.Link as={NavLink} to="/category/tupperware">Tupperware</Nav.Link>
//       <Nav.Link as={NavLink} to="/category/bazar">Bazar</Nav.Link>
//       <Nav.Link as={NavLink} to="/category/cosmetica">Cosmetica</Nav.Link>
//     </Nav>
//     <CartWidget />
//   </Container>
// </Navbar>

// );

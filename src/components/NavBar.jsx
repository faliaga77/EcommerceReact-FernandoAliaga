import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import {NavLink} from "react-router-dom";

export const NavBar = () => (<Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand as={NavLink} to="/">La Tienda de Ana</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
      <Nav.Link as={NavLink} to="/category/tupperware">Tupperware</Nav.Link>
      <Nav.Link as={NavLink} to="/category/bazar">Bazar</Nav.Link>
      <Nav.Link as={NavLink} to="/category/cosmetica">Cosmetica</Nav.Link>
    </Nav>
    <CartWidget />
  </Container>
</Navbar>

);




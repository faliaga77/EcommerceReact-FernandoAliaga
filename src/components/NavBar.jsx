import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";
export const NavBar = () => (<Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">La Tienda de Ana</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href='/'>Home</Nav.Link>
      <Nav.Link href="/category/tupperware">Tupperware</Nav.Link>
      <Nav.Link href="/category/bazar">Bazar</Nav.Link>
      <Nav.Link href="/category/cosmetica">Cosmetica</Nav.Link>
    </Nav>
    <CartWidget />
  </Container>
</Navbar>

);

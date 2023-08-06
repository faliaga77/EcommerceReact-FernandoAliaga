import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { CartWidget } from "./CartWidget";
export const NavBar = () => (      <Navbar bg="dark" data-bs-theme="dark">
<Container>
  <Navbar.Brand href="#home">La Tienda de Ana</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">tupperware</Nav.Link>
    <Nav.Link href="#features">Bazar</Nav.Link>
    <Nav.Link href="#pricing">Cosmatica</Nav.Link>
  </Nav>    <CartWidget/>
</Container>
</Navbar>
     
     );

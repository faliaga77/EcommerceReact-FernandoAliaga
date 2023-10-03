import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';

export const NavBar = () => (
    <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand as={NavLink} to="/">La Tienda de Ana</Navbar.Brand>

            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/categoryid/tupperware">Tupperware</Nav.Link>
                <Nav.Link as={NavLink} to="/categoryid/bazar">Bazar</Nav.Link>
                <Nav.Link as={NavLink} to="/categoryid/cosmetica">Cosmetica</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
);
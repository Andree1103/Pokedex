import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../assets/pokemon-23.svg'

const AppNavbar = () => {
    return (
        <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img className='img_nav' src={logo} alt="" /></Navbar.Brand>
      </Container>
    </Navbar>
    );
};

export default AppNavbar;
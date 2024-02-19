import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/"  >Accueil</Nav.Link>
          <Nav.Link as={NavLink} to="/Events" >Events</Nav.Link>
          
        </Nav>
      
    </Navbar>
  );
}

export default NavigationBar;
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Ma Boutique</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active">Accueil</Nav.Link>
          <Nav.Link as={NavLink} to="/Events" activeClassName="active">Events</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
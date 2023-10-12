
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <Navbar bg="light" data-bs-theme="">
        <Container>
          <Navbar.Brand href="#home">RESTRO APP</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to= "/">Home</Nav.Link>
            <Nav.Link as={Link} to= "/about">About</Nav.Link>
            <Nav.Link as={Link} to= "/contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

type Props = {}

export default function Header({}: Props) {
  return (
    <Navbar  fixed="top" collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/">Outliant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto w-100  d-flex  justify-content-center">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/">About</Link>
            <Link className='nav-link' to="/">Services</Link>
            <Link className='nav-link' to="/products">Products</Link>

          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
            <Button href="/" variant="dark">Action</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
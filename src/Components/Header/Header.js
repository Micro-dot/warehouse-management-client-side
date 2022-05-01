import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" >
            <Container>
                <Navbar.Brand>Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id='nav-link' className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="books">Books</Nav.Link> 
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link> 
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="addNewItems">Add Items</Nav.Link>
                        <Nav.Link as={Link} to="home">Login</Nav.Link>
                        <Nav.Link as={Link} to="home">Sign Up</Nav.Link> 
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
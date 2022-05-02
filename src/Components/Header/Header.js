import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleLogOut = () => {
        signOut(auth);
        navigate('/signin');
    }
    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" className='nav-menu' >
            <Container>
                <Navbar.Brand>Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id='nav-link' className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="manageitems">Manage Items</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {user ?
                            <>
                                <Nav.Link as={Link} to="addNewItems">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="myitems">My Item</Nav.Link>
                                <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
                            </>
                            :
                            <>

                                <Nav.Link as={Link} to="signin">Login In</Nav.Link>
                                <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
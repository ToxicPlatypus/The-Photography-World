import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Images/Logo/camera.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" href="#home">
          <img src={logo} height="40px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <NavDropdown title="Images" id="collasible-nav-dropdown">
              <NavDropdown.Item href="home#gallery">Wedding</NavDropdown.Item>
              <NavDropdown.Item href="home#gallery">Street</NavDropdown.Item>
              <NavDropdown.Item href="home#gallery">WildLife</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            {user ? (
              <Nav.Link
                onClick={handleSignOut}
                eventKey={2}
                as={Link}
                to="/login"
              >
                SignOut
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={2} as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

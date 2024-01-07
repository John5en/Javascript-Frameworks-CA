import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import "../styles.css";

function Header({ cartItemCount }) {
  return (
    <header>
      <Navbar
        bg="darkslategray"
        expand="lg"
        variant="dark"
        className="custom-navbar"
      >
        <Navbar.Brand as={Link} to="/">
          General Goodies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <CartIcon itemCount={cartItemCount} />{" "}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;

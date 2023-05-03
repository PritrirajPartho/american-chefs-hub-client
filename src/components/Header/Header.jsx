import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const{logOut} = useContext(AuthContext);
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand className="fs-1 ms-1">American-Chefs-Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="" id="anchor-contaniner">
                <Link to={"/"}>Home</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={'/registration'}>Registration</Link>
                <Link to={'/login'}>Login</Link>
                 <h1 onClick={logOut}>Logout</h1>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

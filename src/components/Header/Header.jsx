import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Profile from "./Profile/Profile";

const Header = () => {
  const{logOut, user} = useContext(AuthContext);
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand className="fs-1 ms-1">American-Chefs-Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="anchor-contaniner" >
                <div className="link-part">
                <Link to={"/"}>Home</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={'/registration'}>Registration</Link>
                </div>
                {
                    user ? <>
                           <div className="profile-component"><Profile ></Profile></div>
                           <button onClick={logOut}   className=" signout bg-info rounded text-light">Signout</button>
                           </>
                     :
                        <div className="log-link" >
                          <Link to={'/login'}>Log in</Link>
                        </div>
                }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

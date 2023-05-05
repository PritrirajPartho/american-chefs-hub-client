import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Profile from "./Profile/Profile";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand className="fs-1 ms-1">American-Chefs-Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="anchor-contaniner">
            <div className="link-part ">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Home
              </NavLink>
              <NavLink to={"/blog"}>Blog</NavLink>
              <NavLink to={"/registration"}>Registration</NavLink>
            </div>
            {user ? (
              <>
                <div
                  className="profile-component"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={user.displayName}
                >
                  <Profile></Profile>
                  <Tooltip id="my-tooltip" />
                </div>
                <button
                  onClick={logOut}
                  className=" signout bg-warning fs-5 fw-bold border-0 rounded text-light"
                >
                  Signout
                </button>
              </>
            ) : (
              <div className="log-link">
                <NavLink to={"/login"}>Log in</NavLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

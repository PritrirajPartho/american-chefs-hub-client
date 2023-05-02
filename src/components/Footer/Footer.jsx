import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-section">
        <div className="footer-conatainer">
            <Link to={"/"}>Home</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/registration"}>Registration</Link>
            <Link to={"/login"}>Login</Link>
        </div>
        <div>
            <h2>American-Chefs-Hub</h2>
        </div>
    </section>
  );
};

export default Footer;

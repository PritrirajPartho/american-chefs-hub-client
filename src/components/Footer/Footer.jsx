import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-info pb-4">
         <div  className="footer-section">
            <div className="footer-conatainer">
                <Link to={"/"}>Home</Link>
                <Link to={"/blog"}>Blog</Link>
                <Link to={"/registration"}>Registration</Link>
                <Link to={"/login"}>Login</Link>
            </div>
            <div className="footer-second-part">
                <h2>American-Chefs-Hub</h2>
                <h3 className="mt-3">Contact us</h3>
                <h5 className="mt-4">Phone: 0099868900</h5>
            </div>
         </div>
        <h5 className="text-center mb-4 mt-0">American-Chefs-Hub©All-right-reserved.</h5>
    </section>
  );
};

export default Footer;

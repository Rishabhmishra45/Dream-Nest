import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Contact Us */}
                <div className="footer-column">
                    <h2>Contact Us</h2>
                    <p>+910000000000</p>
                    <p>abc12345@gmail.com</p>
                    <p>Address, city/India</p>
                </div>

                {/* Our Services */}
                <div className="footer-column">
                    <h2>Our Services</h2>
                    <ul>
                        <li>Home</li>
                        <li>Add Listing</li>
                        <li>Rent</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h2>Quick Link</h2>
                    <ul>
                        <li>Knowledge Base</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Company Info + Button */}
                <div className="footer-column">
                    <h2>DreamNest</h2>
                    <Link to={"Help Center"} >
                        <button className="footer-btn">Contact Us</button>
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>Privacy Policy || Use of terms</p>
            </div>
        </footer>
    );
};

export default Footer;

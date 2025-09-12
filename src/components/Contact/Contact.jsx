import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="contact-title">Contact Us</h2>
                <p className="contact-desc">
                    We'd love to hear from you! Fill out the form below and we’ll get back
                    to you soon.
                </p>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import gmail from './gmail.png'; // Adjust path if necessary
import github from './github.jpeg'; // Adjust path if necessary
import whatsapp from './whatsapp.jpeg'; // Adjust path if necessary

const iconStyles = {
    width: '24px',
    height: '24px',
    margin: '0 10px', // Space between icons
};

function Contact() {
    return (
        <div>
            <h5>Contact me on </h5>
            <div className="container">
                <center>
                    <div className="social-icons">
                        {/* Social icons with appropriate links */}
                        <a href="mailto:desalesakshi2002@gmail.com" aria-label="Email">
                            <img src={gmail} alt="Email Icon" style={iconStyles} />
                        </a>

                        <a href="https://github.com/sakshi43" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <img src={github} alt="GitHub Icon" style={iconStyles} />
                        </a>

                        <a href="https://wa.me/918080657342" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <img src={whatsapp} alt="WhatsApp Icon" style={iconStyles} />
                        </a>
                    </div>
                </center>
            </div>
        </div>
    );
}

export default Contact;

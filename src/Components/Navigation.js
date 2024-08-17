import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Navigation() {
    return (
        
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar bg="white" expand="lg" style={{ width: '100' }}>
          <Navbar.Brand href="/">Sakshi Desale</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"><b>Home</b></Nav.Link>
              <Nav.Link href="/about"><b>About</b></Nav.Link>
              <Nav.Link href="/project"><b>Project</b></Nav.Link>
              <Nav.Link href="/contact"><b>Contact</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </motion.div>
    );
}

export default Navigation;

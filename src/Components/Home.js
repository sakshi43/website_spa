import React from 'react';
import { motion } from 'framer-motion';
import { Navbar, Nav } from 'react-bootstrap';
import image from './image.jpeg';
import resume from './Resume.pdf';

function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Navbar bg="grey" expand="lg" style={{ width: '100%' }}>
          <Navbar.Brand href="/">Sakshi Desale</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/project">Project</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 0.1 }}
        className="container"
        style={{ marginTop: '60px' }}
      >
        <div className="row">
          <div className="col-md-6">
            <h4>Welcome to Sakshi Desale's Portfolio</h4>
            <p>Recent graduate in Information Technology</p>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-danger"
            >
              Resume
            </a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <motion.img
              src={image}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              style={{ width: '100%', height: 'auto', maxWidth: '500px' }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;

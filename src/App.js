import React from 'react';
import './App.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Project from './Components/Project.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home"><b>Home</b></a></li>
        <li className="navbar-item"><a href="#about"><b>About</b></a></li>
        <li className="navbar-item"><a href="#project"><b>Project</b></a></li>
        <li className="navbar-item"><a href="#contact"><b>Contact</b></a></li>
      </ul>
    </nav>
         
      </header>
      
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
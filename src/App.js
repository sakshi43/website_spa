import './App.css';
import Home from './Components/Home.js'
import About from './Components/About.js'
import Project from './Components/Project.js'
import Contact from './Components/Contact.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <About />
        <Project />
        <Contact />
       
      
      </header>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Works from './Works';

function App() {
    const getMode = () => {
      return JSON.parse(localStorage.getItem("mode")) || false
    }
    const [dark, setDark] = useState(getMode())
  
  
    useEffect(() => {
      localStorage.setItem("mode", JSON.stringify(dark))
    }, [dark])
    return (
      <div className={dark ? "App dark-mode" : "App"}>
        <div className="lightSwitch">
          <label className="switch">
            <input type="checkbox" onChange={() => setDark(!dark)} />
            <span className="slider round"></span>
          </label>
        </div>
        
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
  );
}

export default App;

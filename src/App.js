
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CRM from './components/CRM';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link> | <Link to="/crm">CRM Dashboard</Link> | <Link to="/about">About Us</Link> | <Link to="/contact">Contact Us</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App; */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import CRM from './components/CRM';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <header className="navbar">
        <div className="logo">Xeno</div>
        <nav className="main-menu">
          <Link to="/" className="menu-item">Home</Link>
          <Link to="/crm" className="menu-item">CRM Dashboard</Link>
          <Link to="/about" className="menu-item">About Us</Link>
          <Link to="/contact" className="menu-item">Contact Us</Link>
          <button className="btn-primary">Try It Free</button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;



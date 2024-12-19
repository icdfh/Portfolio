import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Portfoliopage from './components/PortfolioPage';
import ProjectPage from './components/ProjectPage';
import Contact from './components/Contact';
import AboutPage from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfoliopage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

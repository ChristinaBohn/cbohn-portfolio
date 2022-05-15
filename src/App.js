import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

// Import Pages & Components
import ResponsiveAppBar from './components/AppBar';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio/index';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
const pages = ['About', 'Portfolio', 'Contact', 'Resume'];
const [currentPage, setCurrentPage] = useState(pages[0])
  
  return (
    <Router>
      <div>

        {/* Header Navigation Bar */}
        <ResponsiveAppBar
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />

        {/* Pages */}
        <Routes>
          <Route exact path = '/About' element={<AboutMe/>} />
          <Route exact path = '/Portfolio' element={<Portfolio/>} />
          <Route exact path = '/Contact' element={<Contact/>} />
          <Route exact path = '/Resume' element={<Resume/>} />
        </Routes>

        {/* Footer Icons */}
        <Footer/>

      </div>
    </Router>
  );
}

export default App;
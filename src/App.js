import React, {useState} from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Portfolio from './pages/Portfolio/index';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

function App() {
const pages = ['About Me', 'Portfolio', 'Contact', 'Resumé'];
const [currentPage, setCurrentPage] = useState(pages[0])
  

  return (
    <Router>

      <div>
        <ResponsiveAppBar
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />
        <Routes>
          <Route exact path = '/AboutMe' element={<AboutMe/>} />
          <Route exact path = '/Portfolio' element={<Portfolio/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
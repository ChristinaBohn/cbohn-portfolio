import React, {useState} from 'react';
import './App.css';
import ResponsiveAppBar from './components/AppBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Portfolio from './pages/Portfolio/index';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Resumé from './pages/Resume';

function App() {
const pages = ['About', 'Portfolio', 'Contact', 'Resumé'];
const [currentPage, setCurrentPage] = useState(pages[0])
  

  return (
    <Router>

      <div>
        <ResponsiveAppBar
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} />

        <Routes>
          <Route exact path = '/About' element={<AboutMe/>} />
          <Route exact path = '/Portfolio' element={<Portfolio/>} />
          <Route exact path = '/Contact' element={<Contact/>} />
          <Route exact path = '/Resumé' element={<Resumé/>} />
        </Routes>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;
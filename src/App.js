import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

// Import Pages & Components
import ResponsiveAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio/index";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

// Import Project Information
import collaborations from './collaborations';

function App() {
  const pages = ["About", "Portfolio", "Contact"];
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <Router>
      <div>
        {/* Header Navigation Bar */}
        <ResponsiveAppBar
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        {/* Pages */}
        <Routes basename={process.env.PUBLIC_URL}>
          <Route exact path="https://ChristinaBohn.github.io/cbohn-portfolio/cbohn-portfolio" element={<AboutMe />} />
          <Route exact path="https://ChristinaBohn.github.io/cbohn-portfolio/About" element={<AboutMe />} />
          <Route exact path="https://ChristinaBohn.github.io/cbohn-portfolio/Portfolio" element={<Portfolio />} />
          <Route exact path="https://ChristinaBohn.github.io/cbohn-portfolio/Contact" element={<Contact />} />
        </Routes>

        {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Link to="/cbohn-portfolio" element={<AboutMe />} />
          <Link to="/About" element={<AboutMe />} />
        </BrowserRouter> */}

        {/* Footer Icons */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

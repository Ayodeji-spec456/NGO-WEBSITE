import React, { useState } from 'react';
import "./Project.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <img className="them" src="/logo1.png" alt="Logo" />

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={menuOpen ? "come show" : "come"}>
          <li className="top">
            <Link className="map" to="/">
              Home
            </Link>
          </li>
          <li className="top">
            <Link className="map" to="/events">
              Events
            </Link>
          </li>
          <li className="top">
            <Link className="map" to="/blog">
              Blog
            </Link>
          </li>
          <li className="top">
            <Link className="map" to="/about">
              About Us
            </Link>
          </li>
          <li className="top">
            <Link className="map" to="/contact">
              Contact Us
            </Link>
          </li>
          <button className="btn1">Donate</button>
        </ul>
      </nav>
    </>
  );
};

export default Home;

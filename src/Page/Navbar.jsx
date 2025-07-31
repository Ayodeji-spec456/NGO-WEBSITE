import React from 'react'
import "./Project.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul className="come">
          <img className='them' src="/logo1.png" alt="" />
          <li className='top'>
            <Link className='map' to="/home">Home</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/events">Events</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/blog">Blog</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/about">About Us</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/contact">Contact Us</Link>
          </li>
          <button className='btn1'>Donate</button>
        </ul>
      </nav>
    </>
  );
}

export default Home

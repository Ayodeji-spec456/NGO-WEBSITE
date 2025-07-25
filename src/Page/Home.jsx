import React from 'react'
import "./Project.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul className="come">
          <img className='them' src="/logo.jpg" alt="" />
          <li className='top'>
            <Link className='map' to="/">Home</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/">Events</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/">Blog</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/">About</Link>
          </li>
          <li className='top'>
            <Link className='map' to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home

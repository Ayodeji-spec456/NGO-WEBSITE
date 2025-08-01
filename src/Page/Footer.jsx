import React from 'react'
import "./Project.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
const Footer = () => {
  return (
    <>
      <div className="day">
        <div className="cord">
          <img className="lot" src="/logo1.png" alt="" />
          <div className="pdf">
            <p>We are a bridge in the soceity, connecting</p>
            <p>the disadvantaged and unheard, with</p>
            <p> opportunities for a more fulfilled life</p>
          </div>
        </div>
        <div className="mike">
          <h1>Useful link</h1>
          <ul className="led">
            <li>
              <a className="bog" href="./page/home">
                Home
              </a>
            </li>
            <li>
              <a className="bog" href="./component/events">
                Events
              </a>
            </li>
            <li>
              <a className="bog" href="./blogpages/blog">
                Blog
              </a>
            </li>
            <li>
              <a className="bog" href="./componet/aboutus">
                About
              </a>
            </li>
            <li>
              <a className="bog" href="./page/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <FaFacebookSquare className="icon5" />
            <h3 className='some'>Facebook</h3>
          </div>
          <div>
            <FaLinkedin className="icon5" />
            <h3 className='some'>Linkedin</h3>
          </div>
          <div>
            <FaTwitterSquare className="icon5" />
            <h3 className='some'>Twitter</h3>
          </div>
          <div>
            <FaInstagramSquare className="icon5" />
            <h3 className='some'>Instergram</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer

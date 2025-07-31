import React from 'react'
import { Link } from "react-router-dom";
import { IoIosMailOpen, IoMdMail } from "react-icons/io";
import "./Project.css";
import { FaLocationDot, FaMapLocationDot, FaPhoneFlip } from 'react-icons/fa6';

const Home = () => {
  return (
    <>
      <div className="time">
        <div className="pure">
          <h1 className="lass">Everyone Deserves a Chance at Healthy Ageing</h1>
          <br />
          <br />
          <br />
          <p>
            We are a bridge in the soceity, connecting the disadvantaged and
            unheard with opportunities for a more fulfilled life.
          </p>
          <br />
          <p>We are proud to have impacted over 20,000 lives to date.</p>
          <br />
          <button className="btn2">Learn More</button>
        </div>
        <div>
          <img className="img" src="/image7.jpeg" alt="" />
        </div>
      </div>
      <div className="time2">
        <div>
          <img className="img1" src="/image8.jpeg" alt="" />
        </div>
        <div>
          <h1 className="run">About Us</h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="step">
        <br />
        <br />
        <br />
        <br />
        <h1 className="run">Our Programs</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="bob">
          <div className="lit">
            <img className="key" src="/image9.jpeg" alt="" />
            <div className="app">
              <h1>Advocacy</h1>
              <br />
              <p>
                Our advocacy programs encompass physical and environmental
                hygiene, physical and mental health, social wellbeing, and
                eldercare.
              </p>
            </div>
          </div>
          <div className="lit">
            <img className="key" src="/image0.jpeg" alt="" />
            <div className="app">
              <h1>Medical Missions</h1>
              <br />
              <p>
                We carry out health interventions via medical missions and
                outreaches, providing palliative healthcare to the poor in the
                soceity.
              </p>
            </div>
          </div>
          <div className="lit">
            <img className="tie" src="/gave.jpeg" alt="" />
            <div className="app">
              <h1>Policy</h1>
              <br />
              <p>
                We partner with governments to set up policies that protect the
                rights of the under privileged.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="gen">
          <h1 className="run">Latest Events</h1>
          <br />
          <p>Pictures from our Recent programs.</p>
          <br />
        </div>
        <div className="fake">
          <img className="file" src="/image7.jpeg" alt="" />
          <img className="file" src="/image8.jpeg" alt="" />
          <img className="file" src="/image0.jpeg" alt="" />
          <img className="file" src="/image9.jpeg" alt="" />
          <img className="file" src="/old5.jpeg" alt="" />
          <img className="file" src="/old4.jpeg" alt="" />
          <img className="file" src="/old3.jpeg" alt="" />
          <img className="file" src="/old2.jpeg" alt="" />
          <img className="file" src="/old1.jpeg" alt="" />
        </div>
      </div>
      <div className="gene">
        <div className="general">
          <div className="second">
            <div>
              <IoIosMailOpen className="icon9" />
            </div>
            <div>
              <h2>Subsribe To Our Newsletter</h2>
              <br />
              <p>
                Stay in touch with us to get latest news and special offers.
              </p>
            </div>
          </div>
          <div className="meme">
            <input
              className="input"
              type="text"
              placeholder="Your email address"
            />
            <button className="btn99">Submit</button>
          </div>
        </div>
        <div className='command'>
          <div className="rite">
            <FaLocationDot className="icon7" />
            <div>
              <h3>Address</h3>
              <p>2,Adekunle Square</p>
            </div>
          </div>
          <div className="rite">
            <FaPhoneFlip className="icon7" />
            <div>
              <h3>Call Us</h3>
              <p>+234 9132825827</p>
            </div>
          </div>
          <div className="rite">
            <IoMdMail className="icon7" />
            <div>
              <h3>Email</h3>
              <p>aayodeji010@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home

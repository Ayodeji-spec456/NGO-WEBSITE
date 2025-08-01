import React from 'react'
import "./Project.css";
import { Link } from "react-router-dom";
import { FaMapLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { PiGlobe } from "react-icons/pi";
const Contact = () => {
  return (
    <>
      <div className="text">
        <h1>
          <b className="name">Contact </b>
        </h1>
        <p>Vitalage Care Nigeria Foundation Contact</p>
      </div>

      <div className="big">
        <div className="one">
          <FaMapLocationDot className="icon" />
          <h1>Office Address</h1>
          <p>
            2,Adekunle Square, Beside Ebenezer Hotel, Fagbewesa Street Olaiya
            Osogbo Osun State
          </p>
        </div>
        <div className="one">
          <FaPhoneFlip className="icon" />
          <h1>Phone Number</h1>
          <p>+234 9132825827</p>
          <p>+234 7053089429</p>
        </div>
        <div className="one">
          <PiGlobe className="icon" />
          <h1>Web Connect</h1>
          <p>aayodeji010@gmail.com</p>
        </div>
      </div>

      <div className="move">
        <br />
        <h4>
          <b className="col">Write a Message</b>
        </h4>
        <br />
        <h1 className="fun">Have Any Questions?</h1>
        <br />
        <div className="farm">
          <div>
            <input className="song" type="text" placeholder="Full Name" />
          </div>
          <div>
            <input className="song" type="text" placeholder="Email Address" />
          </div>
          <br />
        </div>
        <textarea
          className="funk"
          name=""
          id=""
          placeholder="Your Message"
        ></textarea>
        <button className="btn">SUBMIT NOW</button>
        <div className='cont'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1252932083694!2d4.544577074765862!3d7.776536992243056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037895c78efeac5%3A0xac5ed308fc48ad34!2sOIC%20Hub!5e0!3m2!1sen!2sng!4v1747777668593!5m2!1sen!2sng"
            className="cap"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact

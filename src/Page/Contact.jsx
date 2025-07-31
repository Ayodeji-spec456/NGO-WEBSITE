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
      <br />
      <br />
      <br />

      <div className="big">
        <div className="one">
          <FaMapLocationDot className="icon" />
          <br />
          <br />
          <br />
          <h1>Office Address</h1>
          <br />
          <br />
          <p>
            2,Adekunle Square, Beside Ebenezer Hotel, Fagbewesa Street Olaiya
            Osogbo Osun State
          </p>
        </div>
        <div className="one">
          <FaPhoneFlip className="icon" />
          <br />
          <br />
          <br />
          <h1>Phone Number</h1>
          <br />
          <br />
          <p>+234 9132825827</p>
          <p>+234 7053089429</p>
        </div>
        <div className="one">
          <PiGlobe className="icon" />
          <br />
          <br />
          <br />
          <h1>Web Connect</h1>
          <br />
          <br />
          <p>aayodeji010@gmail.com</p>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="move">
        <br />
        <h4>
          <b className="col">Write a Message</b>
        </h4>
        <br />
        <br />
        <h1 className="fun">Have Any Questions?</h1>
        <br />
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
        <br />
        <br />
        <br />
        <textarea
          className="funk"
          name=""
          id=""
          placeholder="Your Message"
        ></textarea>
        <br />
        <br />
        <br />
        <button className="btn">SUBMIT NOW</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1252932083694!2d4.544577074765862!3d7.776536992243056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1037895c78efeac5%3A0xac5ed308fc48ad34!2sOIC%20Hub!5e0!3m2!1sen!2sng!4v1747777668593!5m2!1sen!2sng"
            className="cap"
          ></iframe>
        </div>
      </div>
      <div>
        <div>
          <img src="/logo1.png" alt="" />
          <h3>
            We are a bridge in the soceity, connecting the disadvantaged and
            unheard, with opportunities for a more fulfilled life
          </h3>
        </div>
      </div>
    </>
  );
}

export default Contact

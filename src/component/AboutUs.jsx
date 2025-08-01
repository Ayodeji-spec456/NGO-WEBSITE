import React from "react";
import "./AboutUs.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-text">
          <h1 className="mine">Vital Age</h1>
          <p>Caring for the Elderly. Changing Lives.</p>
        </div>
      </section>

      <div className="old">
        <img src="/old 2.jpg" alt="" className="old1" />
        <div className="aboutus">
          <p className="associate">Vital Age Association</p>
          <p className="head">About Us</p>
          <p>
            Our programs focus on physical health, emotional well-being, and
            social inclusion. With a dedicated team and strong community
            partnerships, we work tirelessly to ensure that no senior is left
            behind.
          </p>
        </div>
      </div>

      <div className="about-div">
        <section className="about-section-one">
          <h2>About Vital Age</h2>
          <p className="vital">
            Vital Age is a non-governmental organization (NGO) committed to
            improving the quality of life for elderly individuals in our
            communities. Our work is built on compassion, respect, and a deep
            belief that aging should be a journey of dignity, purpose, and care.
          </p>
          <p>
            We serve older adults who face challenges such as poverty,
            abandonment, illness, and neglect. Our programs focus on physical
            health, emotional well-being, and social inclusion. With a dedicated
            team and strong community partnerships, we work tirelessly to ensure
            that no senior is left behind.
          </p>
          <p>
            From health services to home visits, from advocacy to joyful events,
            Vital Age is a place where older people are heard, helped, and
            honored.
          </p>
        </section>

        <div>
          <h2>Our Mission</h2>
          <p>
            To empower older adults with access to health, love, and support—so
            they can live in dignity, safety, and peace. We aim to protect the
            rights of the elderly and ensure they are respected and recognized
            as vital members of society.
          </p>
        </div>
      </div>

      <section className="about-section mission-vision">
        <div>
          <h2>Our Vision</h2>
          <p>
            A world where every aging person is supported, celebrated, and
            valued—regardless of age, health, or social status. We envision a
            future where the elderly can thrive with purpose and connection.
          </p>
        </div>

        <section className="about-section impact">
          <h3>Our impact</h3>
          <p>
            We measure success by the smiles we restore, the health we improve,
            and the lives we touch. Some of our results:
          </p>
          <ul>
            <li>🩺Elderly people medically supported</li>
            <li>🛍Food packages distributed annually</li>
            <li>👥 Active volunteers engaged across regions</li>
            <li>🏘 Home visits completed in underserved areas</li>
            <li>📢 Elder rights campaigns launched in local communities</li>
          </ul>
        </section>
      </section>

      <div className="core">
        <section className="about-section">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Compassion:</strong> We treat every elderly person with
              kindness, empathy, and love.
            </li>
            <li>
              <strong>Dignity:</strong> We believe aging is a privilege, not a
              problem.
            </li>
            <li>
              <strong>Respect:</strong> Every voice deserves to be
              heard—especially those of our elders.
            </li>
            <li>
              <strong>Equity:</strong> We serve without discrimination, putting
              people first.
            </li>
            <li>
              <strong>Community:</strong> We build lasting bonds between seniors
              and society.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>What We Do</h2>
          <p>
            Vital Age offers a wide range of support services and programs
            focused on the total well-being of older adults:
          </p>
          <ul>
            <li>
              <strong>Healthcare Services:</strong> Free medical checkups,
              medicine distribution, and health talks.
            </li>
            <li>
              <strong>Home Support:</strong> Regular home visits for isolated or
              sick seniors.
            </li>
            <li>
              <strong>Nutrition:</strong> Food drives and monthly groceries for
              elders in need.
            </li>
            <li>
              <strong>Social Events:</strong> Community gatherings, birthdays,
              and holiday celebrations for seniors.
            </li>
            <li>
              <strong>Mental Health:</strong> Counseling, listening sessions,
              and wellness workshops.
            </li>
            <li>
              <strong>Awareness Campaigns:</strong> Advocacy against elder abuse
              and education for families and communities.
            </li>
          </ul>
        </section>
      </div>

      <section className="about-section">
        <h2>How We Work</h2>
        <p>
          Our approach is community-driven. We work hand-in-hand with families,
          local health providers, religious bodies, and government agencies to
          reach elderly people where they live.
        </p>
        <p>
          Vital Age operates on transparency, collaboration, and data-based
          strategies. Each program is tailored to meet the unique needs of the
          aging population in the areas we serve.
        </p>
        <p>
          We maintain regular communication with beneficiaries and ensure
          accountability at every level of operation.
        </p>
      </section>

      <section className="about-section support">
        <h2>Get Involved</h2>
        <p>
          Your support can make a huge difference. Whether through donations,
          volunteering, or partnerships—you can help us reach more seniors.
        </p>
        <ul>
          <li>💝 Donate to help us run medical and food programs</li>
          <li>🙋🏽‍♀️ Become a volunteer in your local area</li>
          <li>🧩 Partner with us as an organization or brand</li>
          <li>📣 Share our mission and raise awareness in your circles</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>A Final Word</h2>
        <p>
          At Vital Age, we believe that every stage of life deserves respect,
          attention, and joy. Together, we can build a society where the elderly
          are not forgotten—but are seen, heard, and held in high esteem.
        </p>
        <p>
          Thank you for being part of this vision. Your interest is already a
          step toward change.
        </p>
      </section>
    </div>
  );
};

export default About;

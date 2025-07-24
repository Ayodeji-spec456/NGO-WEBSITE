import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
    
    <div
      className="about-us"
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.7",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#333" }}>🧬 About Us</h1>

      <section>
        <h2>👥 Who We Are</h2>
        <p>
          We are a collaborative team of students and health advocates committed
          to educating the public about vital age-related diseases. Our project
          sheds light on common illnesses that affect people at different stages
          of life—from childhood to old age.
        </p>
      </section>

      <section>
        <h2>🎯 Our Mission</h2>
        <p>
          Our mission is to <strong>spread awareness</strong>,{" "}
          <strong>simplify medical information</strong>, and
          <strong> encourage early detection and prevention</strong> of
          age-specific diseases. We believe that knowledge and awareness can
          save lives and improve long-term health outcomes.
        </p>
      </section>

      <section>
        <h2>🧠 Why We Care</h2>
        <p>
          Diseases like <em>diabetes in adults</em>,{" "}
          <em>hypertension in seniors</em>, or <em>asthma in children</em> often
          go unnoticed or untreated due to lack of awareness. We aim to change
          that by providing accessible information that empowers people to take
          control of their health at every age.
        </p>
      </section>

      <section>
        <h2>📊 What We Cover</h2>
        <ul>
          <li>
            <strong>Childhood Illnesses</strong> – Asthma, Measles, Sickle Cell
            Anemia
          </li>
          <li>
            <strong>Adolescent Health Risks</strong> – Mental Health, Eating
            Disorders, STDs
          </li>
          <li>
            <strong>Adult-Onset Diseases</strong> – Diabetes, High Blood
            Pressure, Fertility Issues
          </li>
          <li>
            <strong>Elderly Health Conditions</strong> – Alzheimer’s, Arthritis,
            Stroke
          </li>
        </ul>
      </section>

      <section>
        <h2>🤝 Our Team Values</h2>
        <ul>
          <li>
            <strong>Empathy</strong> – We care deeply about people’s health and
            well-being.
          </li>
          <li>
            <strong>Teamwork</strong> – Collaboration is our strength.
          </li>
          <li>
            <strong>Education</strong> – We break down complex topics into
            simple, relatable info.
          </li>
          <li>
            <strong>Impact</strong> – Our goal is real-life change, not just
            theory.
          </li>
        </ul>
      </section>

      <section>
        <h2>📢 Get Involved</h2>
        <p>
          This isn’t just about us—it’s about <strong>you</strong>, your family,
          and your future. Join the movement by sharing our content, giving
          feedback, or simply learning something new about the diseases that
          affect people like you every day.
        </p>
      </section>
    </div>
    </>
  );
};

export default AboutUs;


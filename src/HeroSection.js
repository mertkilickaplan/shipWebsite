import React from "react";

const HeroSection = () => (
  <section id="about" className="hero">
    <img src={process.env.PUBLIC_URL + "/shipLogo.webp"} alt="OnePager Logo" className="logo" />
    <h1>Turn Proximity Into Real Possibility</h1>
    <button className="cta-btn">Coming soon to iOS and Android.</button>
  </section>
);

export default HeroSection; 
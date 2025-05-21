import React from "react";

const StepsSection = () => (
  <section className="section steps-section">
    <h2 className="steps-header">Simple, Safe, Social — in 4 Steps</h2>
    <div className="steps-cards">
      <section className="step-card">
        <h3>Check In</h3>
        <p>Use Google Maps to check in at your current venue. We'll confirm you're there — not just passing by.</p>
      </section>
      <section className="step-card">
        <h3>Discover People Nearby</h3>
        <p>After 5 minutes, your presence is verified. You'll see others who also checked in.</p>
      </section>
      <section className="step-card">
        <h3>Send a Connection Request</h3>
        <p>Freemium or premium: you can send a limited number of requests. Mutual acceptance unlocks chat.</p>
      </section>
      <section className="step-card">
        <h3>Chat, Play, Connect</h3>
        <p>Play trivia, accept challenges, or just talk. Socializing is fun again — and actually real.</p>
      </section>
    </div>
  </section>
);

export default StepsSection; 
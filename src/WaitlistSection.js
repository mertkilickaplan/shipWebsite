import React from "react";

const WaitlistSection = () => (
  <section className="section waitlist-section">
    <h2 className="waitlist-title">Join the Waitlist</h2>
    <form className="waitlist-form" action="https://formspree.io/f/XXXXXXX" method="POST">
      <input type="email" name="email" placeholder="Your email" required />
      <button type="submit">Join Waitlist</button>
    </form>
  </section>
);

export default WaitlistSection; 
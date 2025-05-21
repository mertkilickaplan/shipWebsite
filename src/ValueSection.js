import React from "react";

const ValueSection = () => (
  <section className="section">
    <div className="value-wrap">
      <h2 className="value-heading">Ship helps you discover and connect with real people in real places — not just profiles.</h2>
      <div className="value-img">
        <img src={process.env.PUBLIC_URL + "/mockup.webp"} alt="Ship app mock-up" />
      </div>
    </div>
  </section>
);

export default ValueSection; 
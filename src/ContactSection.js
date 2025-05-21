import React from "react";

const ContactSection = () => (
  <section className="section contact-section">
    <div className="contact-card">
      <h2 className="contact-heading">Let's Talk — or Meet IRL</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/XXXXXXXX"
        method="POST"
      >
        <div className="contact-field">
          <label htmlFor="first">First Name *</label>
          <input id="first" name="first" required placeholder="First name" />
        </div>
        <div className="contact-field">
          <label htmlFor="last">Last Name *</label>
          <input id="last" name="last" required placeholder="Last name" />
        </div>
        <div className="contact-field full">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="contact-field full">
          <label htmlFor="msg">Message *</label>
          <textarea
            id="msg"
            name="message"
            rows="5"
            required
            placeholder="Message"
          ></textarea>
        </div>
        <p className="full" style={{ fontSize: "var(--fs-300)", margin: "0" }}>
          Questions? Press inquiry? Want to partner with us? Drop us a line.
        </p>
        <div className="contact-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactSection; 
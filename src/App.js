import React from "react";
import "./App.css";
import CookieBanner from "./CookieBanner";

function App() {
  return (
    <>
      <CookieBanner />
      <main>
        <section id="about" className="hero">
          <img src={process.env.PUBLIC_URL + "/shipLogo.webp"} alt="OnePager Logo" className="logo" />
          <h1>Turn Proximity Into Real Possibility</h1>
          <button className="cta-btn">Coming soon to iOS and Android.</button>
        </section>
        <section className="section">
          <div className="value-wrap">
            <h2 className="value-heading">Ship helps you discover and connect with real people in real places — not just profiles.</h2>
            <div className="value-img">
              <img src={process.env.PUBLIC_URL + "/mockup.png"} alt="Ship app mock-up" />
            </div>
          </div>
        </section>
        <section className="section waitlist-section">
          <h2 className="waitlist-title">Join the Waitlist</h2>
          <form className="waitlist-form" action="https://formspree.io/f/XXXXXXX" method="POST">
            <input type="email" name="email" placeholder="Your email" required />
            <button type="submit">Join Waitlist</button>
          </form>
        </section>
        <section className="section">
          <div className="container">
            <span className="pill">Why Ship?</span>
            <ul className="feature-list">
              <li className="feature-item"><span className="icon"></span>Verified presence, not passive location</li>
              <li className="feature-item"><span className="icon"></span>AI-powered venue suggestions</li>
              <li className="feature-item"><span className="icon"></span>Privacy-first profile visibility</li>
              <li className="feature-item"><span className="icon"></span>Gamified real-world challenges</li>
              <li className="feature-item"><span className="icon"></span>Perfect for dating, friendships & networking</li>
            </ul>
          </div>
        </section>
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
        <section className="section social-section">
          <div className="container">
            <h2 className="social-heading">
              More than a Dating App&nbsp;— It's a Social&nbsp;Engine
            </h2>
            <ul className="social-list">
              <li className="social-item">
                <span className="icon"></span>
                Verified Check-Ins: Ensure authenticity through location verification.
              </li>
              <li className="social-item">
                <span className="icon"></span>
                Only Visible When Present: You're visible only during real-world check-ins.
              </li>
              <li className="social-item">
                <span className="icon"></span>
                AI Agent Recommendations: Best venues, times, and people tailored for you.
              </li>
              <li className="social-item">
                <span className="icon"></span>
                Gamified Challenges: Meet through trivia, emoji games & live tasks.
              </li>
              <li className="social-item">
                <span className="icon"></span>
                Consent-Based Chat: No unsolicited messages — you're in control.
              </li>
            </ul>
          </div>
        </section>
        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee-content-wrapper">
              <div className="marquee-content">Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. ��&nbsp;&nbsp;</div>
              <div className="marquee-content">Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp; Fair, Flexible, and Worth It. 💗&nbsp;&nbsp;</div>
            </div>
          </div>
        </div>
        <section className="section premium-section">
          <div className="container">
            <span className="pill">Premium Benefits</span>
            <ul className="premium-list">
              <li className="premium-item">
                <span className="icon"></span>
                See venue gender ratios and check-in volume
              </li>
              <li className="premium-item">
                <span className="icon"></span>
                Use private mode
              </li>
              <li className="premium-item">
                <span className="icon"></span>
                Get AI timing suggestions
              </li>
              <li className="premium-item">
                <span className="icon"></span>
                More daily connection requests
              </li>
              <li className="premium-item">
                <span className="icon"></span>
                Access premium challenges and exclusive games
              </li>
            </ul>
          </div>
        </section>
        <section className="section contact-section">
          <h2 className="contact-title">Let's Talk — or Meet IRL</h2>
          <form className="contact-form">
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="firstName">First name *</label>
                <input type="text" id="firstName" name="firstName" placeholder="First name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="lastName">Last name *</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last name" required />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="contact-field">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" placeholder="Message" required rows="3"></textarea>
            </div>
            <div className="contact-desc">Questions? Press inquiry? Want to partner with us? Drop us a line.</div>
            <button type="submit" className="contact-submit">Submit</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default App;

import React from "react";
import { StyledContact } from "../styles/Stylesheet";
import mapPin from "../imgs/location.png";
import email from "../imgs/email.png";
import phone from "../imgs/telephone.png";
import githubLogo from "../imgs/github.png";
import fiverrLogo from "../imgs/fiverr.png";
import linkedInLogo from "../imgs/linkedin.png";

function Contact() {
  return (
    <StyledContact>
      <div className="header-text" id="skills">
        <h2>Contact</h2>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="name">
            Full Name
            <input type="text" name="name" id="name" placeholder="Your Name" />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </label>

          <label htmlFor="subject">
            Subject
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </label>

          <label htmlFor="message">
            Message
            <textarea name="message" id="message" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="socials">
        <div className="info-container">
          <div>
            <img src={phone} alt="phone icon" />
            <p>555-555-5555</p>
          </div>
          <div>
            <img src={email} alt="email icon" />
            <p>anemail@gmail.com</p>
          </div>

          <div>
            <img src={mapPin} alt="location pin icon" />
            <p>Bakersfield, California</p>
          </div>
        </div>

        <div className="icons">
          <img src={linkedInLogo} alt="social media link" />
          <img src={fiverrLogo} alt="social media link" />
          <img src={githubLogo} alt="social media link" />
        </div>
      </div>
    </StyledContact>
  );
}

export default Contact;

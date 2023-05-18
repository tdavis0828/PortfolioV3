import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Alert from './Alert';
import { StyledContact } from '../styles/Stylesheet';
import mapPin from '../imgs/location.png';
import email from '../imgs/email.png';
import phone from '../imgs/telephone.png';
import githubLogo from '../imgs/github.png';
import fiverrLogo from '../imgs/fiverr.png';
import linkedInLogo from '../imgs/linkedin.png';
import emailjs from '@emailjs/browser';

function Contact() {
  const [alertIsVisible, setAlertIsVisible] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_sktr7g1',
        'template_o4ggcv1',
        form.current,
        'uHBGQxiG0Tp_1kI1r'
      )
      .then(
        (result) => {
          setIsErr(false);
          setAlertIsVisible(true);
          setTimeout(() => {
            setAlertIsVisible(false);
          }, 3000);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setIsErr(true);
        }
      );
  }
  return (
    <StyledContact id="contact">
      <div className="header-text" id="skills">
        <h2>Contact</h2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'linear', duration: 1.5, x: { duration: 1 } }}
        className="form-container"
      >
        <form ref={form} onSubmit={handleSubmit}>
          {alertIsVisible && <Alert isErr={isErr ? 'false' : 'success'} />}

          <label htmlFor="name">
            Full Name
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              required
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
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
            <textarea name="message" id="message" required />
          </label>

          <button type="submit">Submit</button>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: 'linear', duration: 1.5, x: { duration: 1 } }}
        className="socials"
      >
        <div className="info-container">
          <div>
            <img src={phone} alt="phone icon" />
            <a href="tel:555-555-5555">555-555-5555</a>
          </div>
          <div>
            <img src={email} alt="email icon" />
            <a href="mailto:davis.t8@gmail.com">davis.t8@gmail.com</a>
          </div>

          <div>
            <img src={mapPin} alt="location pin icon" />
            <p>Bakersfield, California</p>
          </div>
        </div>

        <div className="icons">
          <a
            href="https://github.com/tdavis0828"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubLogo} alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-davis-8aab37143/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInLogo} alt="Linked In logo" />
          </a>
          <a
            href="https://www.fiverr.com/tylerdavis571/build-you-a-beautiful-website"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fiverrLogo} alt="Fiverr logo" />
          </a>
        </div>
      </motion.div>
    </StyledContact>
  );
}

export default Contact;

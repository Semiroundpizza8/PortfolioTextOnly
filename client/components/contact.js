import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap';
import ContactForm from './contactForm';

export function Contact() {
  let icons = {
    marginRight: '3%',
  }

  return (
    <div style={{ marginLeft: '5vw', marginRight: '5vw'}}>
      <h1>Talk to me!</h1>
      <p>Feel free to reach out to me anytime via any of the following mediums:</p>
      <p>Email: Me@BenOdisho.com</p>
      <p>Phone: 773-633-0078</p>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/" style={{marginRight: '2.5%'}}><i className="fab fa-linkedin-in fa-lg" /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Semiroundpizza8"><i className="fab fa-github fa-lg" /></a>
      <ContactForm />
    </div>
  )
}

export default connect(null, null)(Contact);

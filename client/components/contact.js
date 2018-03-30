import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap';
import ContactForm from './contactForm';

export function Contact() {
  let icons = {
    marginRight: '3%',
  }
  return (
    <div>
      <h1>Talk to me!</h1>
      <p>Feel free to reach out to me anytime via any of the following mediums.</p>
      <p>Email: Semiroundpizza8@gmail.com</p>
      <p>Phone: 773-633-0078</p>
      <a href="https://www.linkedin.com/in/benjamin-odisho/" style={{marginRight: '2.5%'}}><i className="fab fa-linkedin-in fa-lg" /></a>
      <a to="https://github.com/Semiroundpizza8"><i className="fab fa-github fa-lg" /></a>
      <ContactForm />
    </div>
  )
}

export default connect(null, null)(Contact);

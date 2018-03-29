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
      <h1 style={{fontSize: '3.5em'}}>Talk to me!</h1>
      <h2>{overlap('Seriously, I\'m bored.', 'yellow')}</h2>
      <p>Feel free to reach out to me anytime via any of the following mediums.</p>
      <i className="fab fa-linkedin-in fa-2x" style={icons}></i>
      <i className="fab fa-github-alt fa-2x" style={icons}></i>
      <p><b>Phone:</b> 773-633-0078</p>
      <p><b>Email:</b> Semiroundpizza8@gmail.com</p>
      <ContactForm />
    </div>
  )
}

export default connect(null, null)(Contact);

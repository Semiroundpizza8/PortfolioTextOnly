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
      <h1 style={{fontSize: '4em'}}>Talk to me!</h1>
      <h2>{overlap('Seriously, I\'m bored.', 'yellow')}</h2>
      <h2>Feel free to reach out to me anytime via any of the following mediums.</h2>
      <i className="fab fa-linkedin-in fa-3x" style={icons}></i>
      <i className="fab fa-github-alt fa-3x" style={icons}></i>
      <h2><b>Phone:</b> 773-633-0078</h2>
      <h2><b>Email:</b> Semiroundpizza8@gmail.com</h2>
      <ContactForm />
    </div>
  )
}

export default connect(null, null)(Contact);

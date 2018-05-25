import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap.js';
import { NavLink } from 'react-router-dom';

export function Home() {
  const textStyle = { display: 'inline' };
  return (
    <div>
      <h1 style={textStyle}>Welcome! I’m <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Benjamin Odisho', 'yellow')}</NavLink>, a Chicago-land developer who is passionate about putting together dynamic web applications with Javascript. </h1>
      <h1 style={textStyle}>Feel free to learn about my background and how I came across development on my <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('About', 'pink')}</NavLink> page. If you want to get a glimpse into my past projects, you can visit my <NavLink to="/projects" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Projects', 'pink')}</NavLink> page, </h1>
      <h1 style={textStyle}>or better yet you can reach out to me using my <NavLink to="/contact" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Contact', 'pink')}</NavLink> page and I can tell you about them myself.</h1>
      <h1 style={textStyle}>Additionally, if you're still curious about me feel free to visit my <a target="_blank" rel="noopener noreferrer" href='https://github.com/Semiroundpizza8' onMouseDown={(event) => {event.preventDefault()}}>{overlap('Github', 'cyan')}</a> </h1>
      <h1 style={textStyle}>or <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/" onMouseDown={(event) => {event.preventDefault()}}>{overlap('LinkedIn', 'cyan')}</a> profiles. Thank you for visiting, and hope to speak with you soon!</h1>
    </div>
  )
}

export default connect(null, null)(Home);

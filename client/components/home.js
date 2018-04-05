import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap.js';
import { NavLink } from 'react-router-dom';

export function Home() {
  const textStyle = { display: 'inline' };
  return (
    <div>
      <h1 style={textStyle}>Hey there! I’m <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Benjamin Odisho', 'yellow')}</NavLink>, a Chicago-land developer who loves put together awesome web applications, and this is my site. </h1>
      <h1 style={textStyle}>Wanna hear more about me and my past projects? Learn all about my life on my <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('About', 'pink')}</NavLink> page, all of my different projects on my (very originally named) <NavLink to="/projects" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Projects', 'pink')}</NavLink> page, </h1>
      <h1 style={textStyle}>or brighten up my day and reach out to me through my <NavLink to="/contact" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Contact', 'pink')}</NavLink> page.</h1>
      <h1 style={textStyle}>Additionally, if you're still curious about me feel free to visit my <a target="_blank" rel="noopener noreferrer" href='https://github.com/Semiroundpizza8' onMouseDown={(event) => {event.preventDefault()}}>{overlap('Github', 'cyan')}</a> </h1>
      <h1 style={textStyle}>or <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/" onMouseDown={(event) => {event.preventDefault()}}>{overlap('LinkedIn', 'cyan')}</a> profiles. Thanks for visiting!</h1>
    </div>
  )
}

export default connect(null, null)(Home);

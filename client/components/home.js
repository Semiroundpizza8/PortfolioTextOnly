import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap.js';
import { NavLink } from 'react-router-dom';

export function Home() {

  const headerStyle = {
    fontSize: '9em'
  }

  const linkStyle = {
    marginBottom: '5vh',
    fontSize: '2em',
    textAlign: 'right'
  };

  // ---------------------------
  // CANVAS INIT

  // Delete canvas script if currently one there
  let currentCanvas = document.getElementsByClassName('canvasScript')
  if (currentCanvas.length) { document.body.removeChild(currentCanvas[0]) }

  // Create and run new script
  const script = document.createElement("script");
  script.className = 'canvasScript'
  script.src = "./canvas/flower.js";
  script.async = true;

  // Add script to page
  document.body.appendChild(script);
  // ---------------------------

  return (
    <div style={{ display: 'flex', alignItems: 'right', flexDirection: 'column' }}>
      <p style={{fontSize: '1em'}}>(click anywhere to paint!)</p>
      <h1 style={headerStyle}>Hello!</h1>
      <p style={linkStyle}><NavLink to="/about">About</NavLink></p>
      <p style={linkStyle}><NavLink to="/about">Projects</NavLink></p>
      <p style={linkStyle}><NavLink to="/about">Contact</NavLink></p>
    </div>
  )
}

export default connect(null, null)(Home);


{/* <div>
<h1 style={textStyle}>Welcome! I’m <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Benjamin Odisho', 'yellow')}</NavLink>, a passionate Chicago-land web developer focused on creating dynamic web applications using <NavLink to="/projects" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Javascript', 'cyan')}</NavLink></h1>
<h1 style={textStyle}>Feel free to learn about my background on my <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('About', 'pink')}</NavLink> page, get a glimpse into my past projects throught my <NavLink to="/projects" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Projects', 'pink')}</NavLink> page, </h1>
<h1 style={textStyle}>and to reach out to me via my <NavLink to="/contact" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Contact', 'pink')}</NavLink> page. </h1>
<h1 style={textStyle}>Additionally, if you're still curious about me feel free to visit my <a target="_blank" rel="noopener noreferrer" href='https://github.com/Semiroundpizza8' onMouseDown={(event) => {event.preventDefault()}}>{overlap('Github', 'cyan')}</a> </h1>
<h1 style={textStyle}>or <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/" onMouseDown={(event) => {event.preventDefault()}}>{overlap('LinkedIn', 'cyan')}</a> profiles. Thank you for visiting, and hope to speak with you soon!</h1>
</div> */}
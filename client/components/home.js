import React from 'react';
import { connect } from 'react-redux';
import { About, Contact, Projects } from './';
import { overlap } from './overlap.js';
import { NavLink } from 'react-router-dom';
import { gradate } from './overlap';

export function Home() {

  const headerStyle = {
    color: '#231f20',
    zIndex: '2',
    paddingTop: '80px'
  }

  const hiddenHeaderStyle = {
    color: 'white',
    marginRight: '5vw',
    zIndex: '5',
    paddingTop: '80px',
    textAlign: 'right',
    justifySelf: 'right'
  }

  const linkStyle = {
    marginBottom: '5vh',
    fontSize: '2em',
    textAlign: 'right',
  };

  // ---------------------------
  // CANVAS INIT

  // Delete canvas script if currently one there
  // let currentCanvas = document.getElementsByClassName('canvasScript')
  // if (currentCanvas.length) { document.body.removeChild(currentCanvas[0]) }

  // Create and run new script
  const script = document.createElement("script");
  // script.className = 'canvasScript'
  script.src = "./canvas/flower.js";
  script.async = true;

  // Add script to page
  document.body.appendChild(script);
  // ---------------------------

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'right', flexDirection: 'column', width: '100vw', height: '80vh' }}>
        <canvas src="./canvas/flowe.js" async width="100vw" height="80vh" style={{ position: 'relative', zIndex: '-1', opacity: '.5' }} />
        <div style={{ display: 'flex', width: '90vw', position: 'absolute', justifyContent: 'space-between', paddingLeft: '5vw', paddingRight: '5vw' }}>
          <h1 style={headerStyle}>Developing<br />{gradate('Experiences', 'light')}<br />Before<br />Websites</h1>
          {/* <h1 style={hiddenHeaderStyle}>Designing<br />Experiences<br />Before<br />Websites</h1> */}
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
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
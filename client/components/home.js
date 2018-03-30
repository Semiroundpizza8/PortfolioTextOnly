import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap.js';
import { NavLink } from 'react-router-dom';

export function Home() {
  const textStyle = { display: 'inline' };
  return (
    <div>
      <h1 style={textStyle}>Hello you beautiful, wonderful person. I’m <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Benjamin Odisho', 'yellow')}</NavLink> and this is my temporary site. </h1>
      <h1 style={textStyle}>If you want to know more about my awesome projects feel free to check out my <a href='https://github.com/Semiroundpizza8' onMouseDown={(event) => {event.preventDefault()}}>{overlap('Github', 'cyan')}</a> </h1>
      <h1 style={textStyle}>or <a href="https://www.linkedin.com/in/benjamin-odisho/" onMouseDown={(event) => {event.preventDefault()}}>{overlap('LinkedIn', 'cyan')}</a> profiles. </h1>
      <h1 style={textStyle}>Even better, see my <NavLink to="/about" onMouseDown={(event) => {event.preventDefault()}}>{overlap('About', 'pink')}</NavLink>, <NavLink to="/projects" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Projects', 'pink')}</NavLink>, </h1>
      <h1 style={textStyle}>or <NavLink to="/contact" onMouseDown={(event) => {event.preventDefault()}}>{overlap('Contact', 'pink')}</NavLink> pages.</h1>
    </div>
  )
}

export default connect(null, null)(Home);

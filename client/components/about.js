import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap';
import { NavLink } from 'react-router-dom'

export function About() {
  return (
    <div>
      <h1 style={{ fontSize: '3.5em' }}>Who am I?</h1>
      <p>I'm Benjamin Odisho, a web developer within the Chicagoland area. I began my journies with development studying design and computer science at the University of Illinois at Chicago, working primarily within Java and C++. </p>
      <p>Wanting to work within a faster paced, project based environment I later turned to continue my studies at Fullstack Academy. While there I became proficient in Javascript, along with a number of different web-based technologies such as React, Redux, Express, and Sequelize. </p>
      <p>Following my studies, the staff decided I was awesome enough to be kept on as a Software Engineering Teaching Fellow. There I worked teaching 60+ students those same technologies, acting as a project manager for student projects, and giving lectures on web development technologies. </p>
      <h2>If you want to get in touch and discuss any of my past or potential projects, please reach out to me via <NavLink to={'/contact'}>{overlap('contact', 'lightblue')}</NavLink></h2>
    </div>
  )
}

export default connect(null, null)(About);

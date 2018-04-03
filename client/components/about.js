import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap';
import { NavLink } from 'react-router-dom'
import Chip from 'material-ui/Chip';

export function About() {
  let wrapper = {
    display: 'flex',
    flexWrap: 'wrap'
  }
  let singleChip = {
    margin: '4px'
  }

  return (
    <div>
      <h1>Who am I?</h1>
      <p>I'm Benjamin Odisho, a web developer within the Chicagoland area. I began my journies with development studying design and computer science at the University of Illinois at Chicago, working primarily within Java and C++. </p>
      <p>Wanting to work within a faster paced, project based environment I later turned to continue my studies at Fullstack Academy. While there I became proficient in Javascript, along with a number of different web-based technologies such as React, Redux, Express, and Sequelize. </p>
      <p>Following my studies, the staff decided I was awesome enough to be kept on as a Software Engineering Teaching Fellow. There I worked teaching 60+ students those same technologies, acting as a project manager for student projects, and giving lectures on web development technologies. </p>
      <h2>If you want to get in touch and discuss any of my past or potential projects, please reach out to me via <NavLink to={'/contact'}>{overlap('contact', 'lightblue')}</NavLink></h2>
      <br />
      <h2>Technologies Known</h2> 
      <h3>Proficient</h3>
      <div style={wrapper}>
        <Chip style={singleChip}>Javascript</Chip>
        <Chip style={singleChip}>React</Chip>
        <Chip style={singleChip}>Redux</Chip>
        <Chip style={singleChip}>Node.js</Chip>
        <Chip style={singleChip}>Express</Chip>
        <Chip style={singleChip}>p5.js</Chip>
        <Chip style={singleChip}>Sequelize</Chip>
        <Chip style={singleChip}>ES6 Syntax</Chip>
        <Chip style={singleChip}>HTML</Chip>
        <Chip style={singleChip}>CSS</Chip>
        <Chip style={singleChip}>Flexbox/CSS Grid</Chip>
        <Chip style={singleChip}>Git</Chip>
        <Chip style={singleChip}>Agile Development</Chip>
        <Chip style={singleChip}>Adobe Creative Suite</Chip>
        <Chip style={singleChip}>UI/UX Design</Chip>
      </div>
      <h3>Knowledgeable</h3>
      <div style={wrapper}>
        <Chip style={singleChip}>Firebase</Chip>
        <Chip style={singleChip}>Chrome Extension API</Chip>
        <Chip style={singleChip}>Jasmine</Chip>
        <Chip style={singleChip}>Chai</Chip>
        <Chip style={singleChip}>Semantic-UI</Chip>
        <Chip style={singleChip}>Bootstrap</Chip>
        <Chip style={singleChip}>Material-UI</Chip>
        <Chip style={singleChip}>SQL</Chip>
        <Chip style={singleChip}>Swift</Chip>
        <Chip style={singleChip}>Python</Chip>
        <Chip style={singleChip}>C</Chip>
        <Chip style={singleChip}>C++</Chip>
        <Chip style={singleChip}>Processing</Chip>
        <Chip style={singleChip}>oAuth</Chip>
      </div>
      <h3>Some Experience</h3>
      <div style={wrapper}>
        <Chip style={singleChip}>C#</Chip>
        <Chip style={singleChip}>Java</Chip>
        <Chip style={singleChip}>Arduino</Chip>
        <Chip style={singleChip}>Tessel.io</Chip>
        <Chip style={singleChip}>Django</Chip>
        <Chip style={singleChip}>SCSS</Chip>
        <Chip style={singleChip}>Clojure</Chip>
        <Chip style={singleChip}>Elixir</Chip>
        <Chip style={singleChip}>Pheonix</Chip>
        <Chip style={singleChip}>Quil</Chip>
      </div>
    </div>
  )
}

export default connect(null, null)(About);

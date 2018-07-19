import React from 'react';
import { connect } from 'react-redux';
import { overlap, gradate } from './overlap';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from 'material-ui'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

export function Projects() {
  const projectData = [
    {
      id: 6,
      name: 'Bitboards',
      link: 'https://bitboarddm.herokuapp.com/',
      type: 'Web Application',
      description: 'An application built to allow users to bid on digital advertisment space using Bitcoin technologies. Built for the 2018 Distributed Markets hackathon, being awarded 1st place for both best blockchain application and best use of Qtum technologies.',
      technologies: 'Solidity, Qtum, Blockchain, React, Express, Truffle.'
    },
    {
      id: 1,
      name: 'DayDreamer',
      link: 'https://github.com/Capstone-Daydreamer/Capstone-Daydreamer',
      type: 'Web Application',
      description: 'Allows users to cross reference their schedules in order to plan outtings that fit everyones tastes via tailored recommendations.',
      technologies: 'Cronofy API, React, Redux, Sequelize, Express, Semantic UI.'
    },
    {
      id: 2,
      name: 'Ark Hurricane Safety',
      link: 'https://github.com/Semiroundpizza8/Ark-1',
      type: 'iOS Application',
      description: 'Provides a centralized location for civilian rescue efforts during emergency situations by routing rescuers to those in need.',
      technologies: 'Swift, Google Maps API, Django.'
    },
    {
      id: 3,
      name: 'Lexi Extension',
      link: 'https://github.com/Semiroundpizza8/Lexi_Chrome_Extension',
      type: 'Chrome Extension',
      description: 'Helps make the web more accessable for people suffering with dyslexia by providing audio and visual representations of words.',
      technologies: 'React, Rita.js, Wordnik, Chrome Extension API, Webpack'
    },
    {
      id: 4,
      name: 'Stackathon',
      link: 'https://github.com/Semiroundpizza8/AgentStudy',
      type: 'Generative Art Piece',
      description: 'Utilizes autonomous agents and their lifelike movement patterns in order to paint unique,  abstract pieces that mutate as time goes on.',
      technologies: 'p5.js, Autonomous Agents, Cellular Automota, Vanilla Javascript.'
    },
    {
      id: 5,
      name: 'Bento’s Bazaar',
      type: 'Web Application',
      link: 'https://github.com/zachandthefriedmen/GraceShopper',
      description: 'E-commerce case study for a store distributing pet products. Allows users to purchase items and persist their orders between visits.',
      technologies: 'React, Redux, Sequelize, Express, Bootstrap.'
    },
  ]


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
    <div style={{margin: '0 5vw'}}>
      <h1>Projects.</h1>
      {projectData.map(project => (
        <div key={project.id}>
          <h2 style={{ fontSize: '2em' }}><a target="_blank" rel="noopener noreferrer" href={project.link} style={{color: 'black'}}>{gradate(project.name, 'light')}</a><span style={{ fontSize: '50%', opacity: '.5' }}>  {project.type}</span></h2>
          <p style={{ fontSize: '1em' }}>{project.description}</p>
          <p style={{ fontSize: '1em' }}><b>Technologies Used:</b> {project.technologies}</p>
          <p style={{ fontSize: '1em', color: 'blue' }}><a target="_blank" rel="noopener noreferrer" href={project.link}>Click Here to Learn More.</a></p>
        </div>
      )
      )}
    </div>
  )
}

export default connect(null, null)(Projects);


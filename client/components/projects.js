import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap';

export function Projects() {
  const projectData = [
    {
      id: 1,
      name: 'Lexi',
      link: 'https://github.com/Semiroundpizza8/Lexi_Chrome_Extension',
      type: 'Chrome Extension',
      description: 'Helps make the web more accessable for people suffering with dyslexia by providing audio and visual representations of words.',
      technologies: 'React, Rita.js, Wordnik, Chrome Extension API, Webpack'
    },
    {
      id: 2,
      name: 'DayDreamer',
      link: 'https://github.com/Capstone-Daydreamer/Capstone-Daydreamer',
      type: 'Web Application',
      description: 'Allows users to cross reference their schedules in order to plan outtings that fit everyones tastes via tailored recommendations.',
      technologies: 'Cronofy API, React, Redux, Sequelize, Express, Semantic UI.'
    },
    {
      id: 3,
      name: 'Ark',
      link: 'https://github.com/Semiroundpizza8/Ark-1',
      type: 'iOS Application',
      description: 'Provides a centralized location for civilian rescue efforts during emergency situations by routing rescuers to those in need.',
      technologies: 'Swift, Google Maps API, Django.'
    },
    {
      id: 4,
      name: 'Stackathon',
      link: '',
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

  return (
    <div>
      <h1 style={{ fontSize: '4em' }}>Projects.</h1>
      {projectData.map(project => (
        <div key={project.id}>
          <h1 style={{ fontSize: '3em' }}><a href={project.link}>{overlap(project.name)}</a><span style={{ fontSize: '50%' }}>........ {project.type}</span></h1>
          <p style={{ fontSize: '1em' }}>{project.description}</p>
          <p style={{ fontSize: '1em' }}><b>Technologies Used:</b> {project.technologies}</p>
        </div>
      )
      )}
    </div>
  )
}

export default connect(null, null)(Projects);

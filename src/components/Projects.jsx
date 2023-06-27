import React from 'react';
import classes from './Projects.module.css';
import { projects } from '../Assets/Constant';

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <div className={classes.head}>
        <p className={classes.back}>PROJECTS</p>
        <p className={classes.front}>My Work</p>
      </div>
      <div className={classes.carrousel}>
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            <img src={project.img} alt={project.title} />
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Projects;

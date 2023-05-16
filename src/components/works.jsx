import React from 'react';
import projects from '/home/ghislain/0515/web-agency/src/data/projects'; 
import { Link } from 'react-router-dom';

const Works = () =>
  <>
    <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
    <p>Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.</p>
    <ul>
      {projects.map(project =>(
        <li className="project-card">
          <Link to={`/works/${project.client.toLowerCase()}-study-case`}>
            <div className="card-content">
              <h2 className="project-client">{project.client}</h2>
              <p className="project-title">{project.title}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </>
;

export default Works;
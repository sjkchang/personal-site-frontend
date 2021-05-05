import React, {useState} from 'react';
import './styles/App.css';
import './styles/Projects.css'
import Card from './Card';


function Projects() {

  return (
    <div className="projects-container">
        <ul className="cards-wrapper">
            <li><h1 className="label">Projects</h1></li>
            <li>
                <Card name="SpotiVibes" description="Spotify Web Api App" />
            </li>
            <li >
                <Card name="Wasup" description="hello" />
            </li>
        </ul>
    </div>
  );
}

export default Projects;




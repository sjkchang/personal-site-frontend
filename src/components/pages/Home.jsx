import React from 'react';
import Projects from '../Projects';
import About from '../About';

import '../styles/App.css';
import '../styles/Home.css'

import image from './image.png';

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="intro-container">
          <div className="intro-text">
            <h1 className="title">Steven Chang</h1>
            <div className="sub-title">
              <h4>I like to make stuff</h4>
              <span className="icon"><a href="https://github.com/sjkchang" target="_blank" rel="noreferrer"><i className='fa fa-lg fa-github-square'></i></a></span>
              <span className="icon"><a href="https://www.linkedin.com/in/steven-chang-7723b518b/" target="_blank" rel="noreferrer"><i className='fab fa-lg fa-linkedin'></i></a></span>
            </div>
          </div>
          <div className="intro-image center">
            <img src={image} />
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content">
          <About />
          <Projects />
        </div>
      </div>
    </div>


  );
}

export default Home;

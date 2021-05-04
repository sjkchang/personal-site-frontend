import React from 'react';
import '../styles/App.css';
import '../styles/Home.css'
import image from './image.png';

function Home() {
  return (
    <div className="home-container">
      <div className="title-container">
        <h1 className="title">Steven Chang</h1>
        <h4 className="sub-title">I like to make stuff</h4>
        <span className="icon"><a href="https://github.com/sjkchang" target="_blank" rel="noreferrer"><i className='fa fa-2x fa-github-square'></i></a></span>
        <span className="icon"><a href="https://www.linkedin.com/in/steven-chang-7723b518b/" target="_blank" rel="noreferrer"><i className='fab fa-2x fa-linkedin'></i></a></span>
      </div>
      <div className="image-container center">
        <img src={image}/>
      </div>
    </div>
  );
}

export default Home;

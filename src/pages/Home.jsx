import React from 'react';
import '../styles/App.css';

function Home() {
  return (
    <div id="big" className="Home">
      <h1>Steven Chang</h1>
      <p>I like to make stuff</p>
      <span><a href="https://github.com/sjkchang" target="_blank" rel="noreferrer"><i className='fa fa-2x fa-github-square'></i></a></span>
      <span><a href="https://www.linkedin.com/in/steven-chang-7723b518b/" target="_blank" rel="noreferrer"><i className='fab fa-2x fa-linkedin'></i></a></span>
    </div>
  );
}

export default Home;

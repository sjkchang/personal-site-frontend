import React from 'react';

import './styles/App.css';
import './styles/About.css'

function Home() {
    return (
        <div className="about-container">
            <div className="numbered-heading">
                <h1 >About Me</h1>
            </div>
            <div className="inner">
                <div className="about-text">
                    <p>
                        Hello! My name is Steven. I am driven and eager to learn.
                        and am looking for software engineering opportunities.
                        I am currently a student as San Jose State University,
                        majoring in software engineering. Through my studies and personal
                        endeavors, I have developed a well balanced foundation of
                        programming concepts.
                    </p>
                    <br></br>
                    <p>
                        Outside of my time programming,
                    </p>
                    <div className="skill-list">
                        <ul>
                            <li>Python</li>
                        </ul>
                    </div>
                </div>
                <div className="about-image">

                </div>
            </div>
        </div>

    );
}

export default Home;

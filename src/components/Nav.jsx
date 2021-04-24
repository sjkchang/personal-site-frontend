import React from 'react';
import './styles/App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <nav>
        <h3>Logo</h3>
        <ul>
            <Link to="/" style={navStyle}><li class="nav-links">Home</li></Link>
            <Link to="/about" style={navStyle}><li class="nav-links">About</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;

import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom';
import 'react-bootstrap';

function Nav() {
  return (
    <nav className="navbar"> 
      <div className="navbar-container">
        <ul>
          <li><Link to='/' className='nav-logo'>Logo</Link></li>
          <li className='nav-item'>
            <Link to='/' className='nav-links'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-links'>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;

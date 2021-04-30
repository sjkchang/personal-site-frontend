import React from 'react';
import '../styles/Nav.css';
import {Link} from 'react-router-dom';
import 'react-bootstrap';

function Nav() {
  return (
    <nav id="navbar" class=""> 
      <div className="navbar-wrapper">
        <div className='logo'>
          <li><Link to='/'><i className='fa fa-atom'></i>Logo</Link></li>
        </div>
        <ul id="nav-list">
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-link'>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;

import React, {useEffect, useState} from 'react';
import './styles/Nav.css';
import {Link} from 'react-router-dom';
import 'react-bootstrap';

function Nav() {
  const [scrolled, setScroll] = useState(false);
  
  function handleScroll() {
    const position = window.scrollY;
    if (position > 1){
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

    }
  });


  return (
    <nav id="navbar" class={scrolled ? "floating-nav" : ""}> 
      <div className="navbar-wrapper">
        <div className='logo'>
          <Link to='/'><i className='fas fa-lg fa-strikethrough'></i></Link>
        </div>
        <ul id="nav-list">
          <li className='nav-item'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-link'>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' className='nav-link'>Blog</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact-me' className='nav-link'>Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;

import React, {useState} from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import 'react-bootstrap';
import Button from './Button';

function Nav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960){
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar"> 
      <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
          Logo <i class="fas fa-atom"></i>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>Portfolio</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
          </li>
        </ul>
        {button && <Button></Button>}
      </div>
    </nav>

  );
}
export default Nav;

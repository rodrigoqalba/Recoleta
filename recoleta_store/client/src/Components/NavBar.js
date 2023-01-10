import React, {useState, useEffect} from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom'
import logo from '../assets/Recoleta-logos_transparent copy.png'
import './NavBar.css'
// import { Button } from "../styles";



function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);

  return (
  <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo">
          <img src={logo} height={100} width={225} alt="Recoleta Logo" />
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' >
              Products
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline' onClick={handleLogoutClick}>Log out</Button>}
      </div>
    </nav>
  </>
  );
}

export default NavBar;


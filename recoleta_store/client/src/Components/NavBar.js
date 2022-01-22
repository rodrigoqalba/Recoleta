import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/Recoleta-logos_transparent copy.png'
import './NavBar.css'
import { Button } from "../styles";


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
  <>
     <nav className='navbar'>
       <div className='navbar-container'>
         <Link to="/" className="navbar-logo">
            <img src={logo} height={100} width={225} alt="Recoleta Logo" />
         </Link>
         <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
       </div>
     </nav>
  </>
  );
}

export default NavBar;


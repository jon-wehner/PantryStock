import React from 'react';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">PantryStock</h1>
      <div className="navbar__navlinks">
        <h2 className="navlink">Nav</h2>
        <h2 className="navlink">Links</h2>
        <h2 className="navlink">Go</h2>
        <h2 className="navlink">Here</h2>
      </div>
    </nav>
  );
}

export default NavBar;

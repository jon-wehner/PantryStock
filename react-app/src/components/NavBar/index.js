import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';

function NavBar({ authenticated, setAuthenticated }) {
  const userId = useSelector((state) => state.session.id);
  const navigate = useNavigate();
  const [showNavLinks, setShowNavLinks] = useState(false);
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };
  const login = () => {
    navigate('/login');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      toggleNavLinks();
    }
  };
  return (
    <nav className="navbar" style={{ height: showNavLinks ? '12rem' : '6rem' }}>
      <div className="navbar__mobile">
        <Link to="/">
          <h1 className="navbar__logo">PantryStock </h1>
        </Link>
        <i role="button" className="fas fa-bars navlinks-toggle" tabIndex={0} aria-label="toggle nav links" onClick={toggleNavLinks} onKeyPress={handleEnter} />
      </div>
      <ul className={`navbar__navlinks${showNavLinks ? ' navlinks-active' : ''}`}>
        {authenticated ? (
          <div>
            <Link to="/" className="pantryNavLink">
              Dashboard
            </Link>
            { userId && <Link to="/inventory" className="pantryNavLink">Your  Pantry</Link>}
            <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        ) : <li className="navlink"><button type="button" onClick={login}>Login</button></li>}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  setAuthenticated: PropTypes.func.isRequired,
};

export default NavBar;

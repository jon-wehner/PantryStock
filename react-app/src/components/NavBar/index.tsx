import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css';

interface NavBarProps {
  authenticated: boolean,
  setAuthenticated: Function
}
function NavBar({ authenticated, setAuthenticated }: NavBarProps) {
  const userId = useAppSelector((state) => state.session.id);
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
    <nav className="navbar" style={{ height: showNavLinks ? '14rem' : '6rem' }}>
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
            { userId && <Link to="/inventory" className="pantryNavLink">My  Pantry</Link>}
            <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        ) : <li className="navlink"><button type="button" onClick={login}>Login</button></li>}
      </ul>
    </nav>
  );
}

export default NavBar;

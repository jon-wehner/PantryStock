import { useState } from 'react';
import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  const [showNavLinks, setShowNavLinks] = useState(false)
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks)
  }
  return (
    <nav className={"navbar" + (showNavLinks ? " navbar-active" : "")}>
      <div className="navbar__mobile">
        <h1 className="navbar__logo">PantryStock</h1>
        <i className="fas fa-bars navlinks-toggle" onClick={toggleNavLinks}/>
      </div>
      <ul className={"navbar__navlinks" + (showNavLinks ? " navlinks-active" : "")} >
        <li className="navlink">Nav</li>
        <li className="navlink">Links</li>
        <li className="navlink">Go</li>
        <li className="navlink">Here</li>
      </ul>
    </nav>
  );
}

export default NavBar;

import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ authenticated, setAuthenticated }) => {
  const history = useHistory()
  const [showNavLinks, setShowNavLinks] = useState(false)
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks)
  }
  const login = () => {
    history.push('/login')
  }
  return (
    <nav className="navbar" style={{ height: showNavLinks ? '12rem' : '3rem'}}>
      <div className="navbar__mobile">
        <h1 className="navbar__logo">PantryStock</h1>
        <i className="fas fa-bars navlinks-toggle" onClick={toggleNavLinks}/>
      </div>
      <ul className={"navbar__navlinks" + (showNavLinks ? " navlinks-active" : "")} >
        <li className="navlink"><button type="none" onClick={login}>Login</button></li>
        {authenticated && < LogoutButton setAuthenticated={setAuthenticated} />}
      </ul>
    </nav>
  );
}

export default NavBar;

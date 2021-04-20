import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton';
import './NavBar.css'

const NavBar = ({ authenticated, setAuthenticated }) => {
  const user = useSelector(state => state.session.user)
  const history = useHistory()
  const [showNavLinks, setShowNavLinks] = useState(false)
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks)
  }
  const login = () => {
    history.push('/login')
  }
  return (
    <nav className="navbar" style={{ height: showNavLinks ? '12rem' : '6rem'}}>
      <div className="navbar__mobile">
        <Link to="/">
          <h1 className="navbar__logo">PantryStock </h1>
        </Link>
        <i className="fas fa-bars navlinks-toggle" onClick={toggleNavLinks}/>
      </div>
      <ul className={"navbar__navlinks" + (showNavLinks ? " navlinks-active" : "")} >
        {authenticated ? (
          <div>
            <Link to="/" className="pantryNavLink">
              Dashboard
            </Link>
            { user && <Link to={`/user/${user.id}/inventory`} className="pantryNavLink">Your  Pantry</Link>}
            < LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        ) : <li className="navlink"><button type="none" onClick={login}>Login</button></li>}
      </ul>
    </nav>
  );
}

export default NavBar;

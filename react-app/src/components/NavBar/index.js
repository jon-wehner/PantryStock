import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  const toggleNavLinks = () => {
    return null
  }
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">PantryStock</h1>
      <i className="fas fa-bars navlinks-toggle" onClick={toggleNavLinks}/>
      <ul className="navbar__navlinks">
        <li className="navlink">Nav</li>
        <li className="navlink">Links</li>
        <li className="navlink">Go</li>
        <li className="navlink">Here</li>
      </ul>
    </nav>
  );
}

export default NavBar;

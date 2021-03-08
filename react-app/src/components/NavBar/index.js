import './NavBar.css'

const NavBar = ({ setAuthenticated }) => {
  const toggleNavLinks = () => {
    return null
  }
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">PantryStock</h1>
      <i className="fas fa-bars navlinks-toggle" onClick={toggleNavLinks}/>
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

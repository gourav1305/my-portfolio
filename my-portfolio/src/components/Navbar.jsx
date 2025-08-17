import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="logo">MyPortfolio</Link>

        <nav className="nav-links">
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : undefined}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : undefined}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

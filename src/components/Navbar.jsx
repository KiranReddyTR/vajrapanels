import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(true)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { theme, toggle } = useTheme()

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    if (!isHome) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          <div className="brand-logo">
            <img src="/images/vajra-panels-logo.png" alt="Vajra Panels Logo" className="brand-logo-img" />
          </div>
        </Link>

        <div className="nav-right">
          <ul className={`nav-menu${menuOpen ? ' open' : ''}`} id="navMenu">
            <li><Link to="/" className={location.pathname === '/' ? 'active-page' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active-page' : ''}>About</Link></li>
            <li><Link to="/certifications" className={location.pathname === '/certifications' ? 'active-page' : ''}>Certifications</Link></li>
            <li><Link to="/team" className={location.pathname === '/team' ? 'active-page' : ''}>Team</Link></li>
            <li><Link to="/products" className={location.pathname === '/products' ? 'active-page' : ''}>Products</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active-page' : ''}>Projects</Link></li>
            <li><Link to="/contact" className="nav-cta">Enquire Now</Link></li>
          </ul>

          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}>
            {theme === 'dark'
              ? <i className="fas fa-sun"></i>
              : <i className="fas fa-moon"></i>}
          </button>

          <button className={`nav-toggle${menuOpen ? ' active' : ''}`} id="navToggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(o => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

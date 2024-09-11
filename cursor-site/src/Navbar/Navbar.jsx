import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">Your Logo</a>
        {isMobile ? (
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuActive ? '✕' : '☰'}
          </div>
        ) : null}
        <ul className={`nav-menu ${isMenuActive || !isMobile ? 'active' : ''}`}>
          <li className="nav-item"><a href="/" className="nav-links">Home</a></li>
          <li className="nav-item"><a href="/about" className="nav-links">About</a></li>
          <li className="nav-item"><a href="/services" className="nav-links">Services</a></li>
          <li className="nav-item"><a href="/contact" className="nav-links">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-logo">
        <Link to="/">Tugas Web Developer</Link>
      </div>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <ul>

          <li>
            <Link to="/form">From</Link>
          </li>

          <li>
            <Link to="/">profile</Link>
          </li>

        </ul>
      </div>
      <div className="nav-hamburger" onClick={toggleNav}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </div>
    </div>
  );
}

export default NavBar;

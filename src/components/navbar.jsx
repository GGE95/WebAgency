import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/works">Projets</Link>
        </li>
        <li>
          <Link to="/about">L'agence</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Change light</button>
    </nav>
  );
}

export default Navbar;

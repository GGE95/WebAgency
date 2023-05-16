import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import About from './components/about';
import Works from './components/works';
import Project from './components/project';
import Navbar from './components/navbar';
import ThemeContext from './components/ThemeContext';
import './style.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

const App = () => {
  const [theme, setTheme] = useState('day');
  const toggleTheme = () => {
    setTheme(theme === 'day' ? 'night' : 'day');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/works/:WorksClient-study-case" element={<Project />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeContext.Provider> 
    );
};



ReactDOM.render(<App />, document.getElementById('root'));
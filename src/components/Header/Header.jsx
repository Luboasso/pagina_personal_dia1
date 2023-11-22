import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Welcome to My Page</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/technologies">Technologies I Work With</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header
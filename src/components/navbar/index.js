import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link className="link" to='/'>Home</Link>
      <Link className="link" to='/auth'>Login</Link>
      <Link className="link" to='/recipebook'>Sample Recipe</Link>
      <Link className="link" to='/dashboard'>Personal Recipe List</Link>
    </nav>
  );
};

export default Navbar;

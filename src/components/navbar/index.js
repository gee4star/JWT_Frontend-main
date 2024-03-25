import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link className="link" to='/auth'>Login</Link>
      <Link className="link" to='/dashboard'>Recipe Book</Link>
    </nav>
  );
};

export default Navbar;

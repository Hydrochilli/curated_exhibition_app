import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Exhibition Curator App</h1>
      <nav>
        <Link to="/" className="mx-2 hover:underline">Home</Link>
        <Link to="/exhibitions" className="mx-2 hover:underline">Exhibitions</Link>
        <Link to="/about" className="mx-2 hover:underline">About</Link>
        <Link to="/contact" className="mx-2 hover:underline">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
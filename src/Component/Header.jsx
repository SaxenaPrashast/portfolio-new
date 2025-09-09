import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex flex-row items-center justify-center fixed top-0 left-0 w-full z-10 bg-primary">
      <header className="py-3 md:px-8 lg:px-16">
        <nav className="flex items-center justify-between">
          <ul className="hidden md:flex space-x-8 text-m">
            <li><Link to="/" className="hover:text-gray-400 transition-colors">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-400 transition-colors">Projects</Link></li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-400 transition-colors"
              >
                Contact
              </a>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
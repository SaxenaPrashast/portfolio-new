import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center py-8 text-gray-400 text-sm">
      {/* Social Links */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          href="https://github.com/SaxenaPrashast"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://dev.to/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <i className="fab fa-dev"></i>
        </a>

        <a
          href="https://hashnode.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          <i className="fab fa-hashnode"></i>
        </a>
      </div>

      {/* Internal Links */}
      <p>
        Made by ❤︎{" "}
        <Link to="/about" className="hover:text-white transition-colors">
          Prashast Saxena
        </Link>
      </p>
    </footer>
  );
}

export default Footer;


import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Ranjay Kumar</h1>
          <p className="text-lg font-light">Web Developer</p>
        </div>
            
        
        <nav className="space-x-4">
          <a href="#projects" className="text-lg hover:underline">
            Projects
          </a>
          <a href="#resume" className="text-lg hover:underline">
            Resume
          </a>
          <a href="#contact" className="text-lg hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

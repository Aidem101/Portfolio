import React, { useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'Обо мне' },
    { path: '/tech-stack', label: 'Навыки' },
    { path: '/projects', label: 'Проекты' },
    { path: '/contact', label: 'Контакты' }
  ];

  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo">
          <span style={{ color: '#2f5233' }}>И</span>
          <span style={{ color: '#ff6b35' }}>М</span>
        </NavLink>

        <nav className="nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => isActive ? 'active' : ''}
              end
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="socials">
          <a href="#" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>

        <div
          className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMobileMenu}
            end
          >
            {item.label}
          </NavLink>
        ))}

        <div className="mobile-socials">
          <a href="#" aria-label="GitHub">
            <Github size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

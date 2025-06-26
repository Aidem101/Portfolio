import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © 2025{" "}
        <Link to="/">
          Иван Метленко
        </Link>
        . Информационный ресурс
      </p>
    </footer>
  );
};

export default Footer;
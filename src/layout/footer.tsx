import React from 'react';
import './styles.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        &copy; {new Date().getFullYear()} <span>Light/Dark mode app</span>
      </div>
    </footer>
  );
};

export default Footer;

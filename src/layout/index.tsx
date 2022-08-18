import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import './styles.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <div className="main-wrapper">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import { Header } from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};

export { Layout };

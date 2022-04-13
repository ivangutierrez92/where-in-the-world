import React, { useContext } from 'react';
import Header from '../components/Header';
import styles from '../styles/containers/Layout.module.css';
import { ThemeContext } from '../context/ThemeProvider';

const Layout = ({ children }) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`${styles.Container} ${theme}`}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;

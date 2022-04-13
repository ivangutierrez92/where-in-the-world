import Link from 'next/link';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/components/Header.module.css';
import { ThemeContext } from '../context/ThemeProvider';

const Header = () => {
  const { theme, onChangeTheme } = useContext(ThemeContext);

  return (
    <header className={`${styles.Header} ${theme}`}>
      <nav>
        <Link href="/">
          <a className={`${styles.homeLink} ${theme}`}>Where in the world?</a>
        </Link>
      </nav>
      <div>
        <button className={`${styles.darkModeButton}`} onClick={onChangeTheme}>
          <FontAwesomeIcon icon={faMoon} className={`${styles['darkModeButton__icon']}`} /> Dark
          Mode
        </button>
      </div>
    </header>
  );
};

export default Header;

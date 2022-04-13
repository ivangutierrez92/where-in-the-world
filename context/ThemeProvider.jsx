import React, { createContext, useEffect, useState } from 'react';
import themeMap from '../constants/themeMap';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeMap.light);
  useEffect(() => {
    try {
      const localStorageTheme = localStorage.getItem('theme');
      if (!localStorageTheme) {
        localStorage.setItem('theme', JSON.stringify(themeMap.light));
      } else {
        setTheme(JSON.parse(localStorageTheme));
      }
    } catch (error) {}
  }, []);

  const onChangeTheme = () => {
    const newTheme = theme === themeMap.dark ? themeMap.light : themeMap.dark;
    localStorage.setItem('theme', JSON.stringify(newTheme));
    setTheme(newTheme);
  };

  return <ThemeContext.Provider value={{ theme, onChangeTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };

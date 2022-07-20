import React, { createContext, useContext, useEffect } from 'react';
import { changeBarColors } from 'react-native-immersive-bars';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { LightTheme, DarkTheme } from './../themes';
import { useColorScheme } from 'react-native';
import { CustomTheme } from '../common/interfaces';

const ThemeContext = createContext<CustomTheme>(LightTheme);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : LightTheme;
  useEffect(() => {
    changeBarColors(isDarkMode);
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };

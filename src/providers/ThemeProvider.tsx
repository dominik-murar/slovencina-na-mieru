import React, {createContext, useContext, useEffect} from 'react';
import {changeBarColors} from 'react-native-immersive-bars';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import {LightTheme, DarkTheme} from './../themes';
import {useColorScheme} from 'react-native';
import {ThemeContextProps} from '../interfaces/providers';

const ThemeContext = createContext<ThemeContextProps>({
  theme: LightTheme,
  isDarkMode: false,
});

const ThemeProvider = ({children}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : LightTheme;
  useEffect(() => {
    changeBarColors(isDarkMode);
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{theme, isDarkMode}}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export {ThemeProvider, useTheme};

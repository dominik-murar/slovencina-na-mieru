import {Theme} from '@react-navigation/native';
import {StatusBarStyle} from 'react-native';

export interface CustomTheme extends Theme {
  barStyle?: StatusBarStyle;
}

export interface ThemeContextProps {
  theme: CustomTheme;
  isDarkMode: boolean;
}

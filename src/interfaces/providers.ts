import {Theme} from '@react-navigation/native';
import {StatusBarStyle} from 'react-native';

export type CustomTheme = Theme & {
  barStyle?: StatusBarStyle;
  colors: {
    secondary: string;
  };
};

export interface ThemeContextProps {
  theme: CustomTheme;
  isDarkMode: boolean;
}

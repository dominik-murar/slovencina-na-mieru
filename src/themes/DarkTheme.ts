import {DarkTheme as NavDarkTheme} from '@react-navigation/native';
import {CustomTheme} from '../interfaces/providers';

const DarkTheme: CustomTheme = {
  ...NavDarkTheme,
  barStyle: 'light-content',
  colors: {
    ...NavDarkTheme.colors,
    primary: '#1E5B9F',
    primaryOpaq: '#1E5B9F99',
    secondary: '#D64B4B',
    success: '#5e9183',
    background: '#121212',
    text: '#ffffff',
  },
};

export default DarkTheme;

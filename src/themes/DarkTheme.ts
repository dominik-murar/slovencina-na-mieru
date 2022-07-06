import {DarkTheme as NavDarkTheme} from '@react-navigation/native';
import {CustomTheme} from '../interfaces/providers';

const DarkTheme: CustomTheme = {
  ...NavDarkTheme,
  barStyle: 'light-content',
  colors: {
    ...NavDarkTheme.colors,
    primary: '#1E5B9F',
    secondary: '#D64B4B',
    background: '#121212',
    text: '#ffffff',
  },
};

export default DarkTheme;

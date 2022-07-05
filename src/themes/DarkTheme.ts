import {DarkTheme as NavDarkTheme} from '@react-navigation/native';
import {CustomTheme} from '../interfaces/providers';

const DarkTheme: CustomTheme = {
  ...NavDarkTheme,
  barStyle: 'light-content',
  colors: {
    ...NavDarkTheme.colors,
    background: '#121212',
    text: '#ffffff',
  },
};

export default DarkTheme;

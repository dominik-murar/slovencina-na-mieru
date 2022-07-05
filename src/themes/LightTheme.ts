import {DefaultTheme as NavDefaultTheme} from '@react-navigation/native';
import {CustomTheme} from '../interfaces/providers';

const LightTheme: CustomTheme = {
  ...NavDefaultTheme,
  barStyle: 'dark-content',
  colors: {
    ...NavDefaultTheme.colors,
    background: '#ffffff',
    text: '#121212',
  },
};

export default LightTheme;

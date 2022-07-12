import {DefaultTheme as NavDefaultTheme} from '@react-navigation/native';
import {CustomTheme} from '../interfaces/providers';

const LightTheme: CustomTheme = {
  ...NavDefaultTheme,
  barStyle: 'dark-content',
  colors: {
    ...NavDefaultTheme.colors,
    primary: '#1E5B9F',
    primaryOpaq: '#1E5B9F99',
    secondary: '#D64B4B',
    success: '#A1CEC1',
    background: '#ffffff',
    text: '#121212',
  },
};

export default LightTheme;

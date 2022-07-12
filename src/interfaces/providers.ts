import {Theme} from '@react-navigation/native';
import {StatusBarStyle} from 'react-native';

export type CustomTheme = Theme & {
  barStyle?: StatusBarStyle;
  colors: {
    primaryOpaq: string;
    secondary: string;
    success: string;
  };
};

export interface ExerciseWordsContextValue {
  activeKey: string;
  setActiveKey: (input: string) => void;
  activeVal: string;
  setActiveVal: (input: string) => void;
  isCorrect: boolean;
  setIsCorrect: (input: boolean) => void;
}

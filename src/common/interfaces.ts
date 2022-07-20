import { Theme } from '@react-navigation/native';
import { StatusBarStyle } from 'react-native';

export type ButtonType = 'default' | 'success';

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: ButtonType;
  invisible?: boolean;
}

export interface PillWordTranslateProps {
  text: string;
  isActive: boolean;
  isCorrect?: boolean;
  returnActive: (item: string) => void;
}

export interface PillWordBankProps {
  itemKey: string;
  inBank?: boolean;
}

export interface PillMultipleChoiceProps {
  itemKey: string;
}

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

export interface ExerciseSentencesWordObject {
  word: string;
  isUsed: boolean;
}

export type SentenceWordBank = Map<string, ExerciseSentencesWordObject>;

export interface ExerciseProviderOutput {
  answer: Array<string>;
  setAnswer: (item: Array<string>) => void;
  appendWord: (item: string) => void;
  removeWord: (item: string) => void;
  sentenceWordBank: SentenceWordBank;
  updateSentenceWordBank: (k: string, v: ExerciseSentencesWordObject) => void;
}

export type ExerciseAnswer = Array<string>;

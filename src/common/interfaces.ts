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
  type: 'key' | 'val';
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

export interface SentencesWordValueObject {
  word: string;
  isUsed: boolean;
}

export interface MultipleOptionsValueObject {
  word: string;
  isSelected: boolean;
}

export type TranslateWordsMap = Map<string, string>;
export type SentenceWordMap = Map<string, SentencesWordValueObject>;
export type MultipleOptionsMap = Map<string, MultipleOptionsValueObject>;

export interface ExerciseProviderOutput {
  answer: Array<string>;
  setAnswer: (item: Array<string>) => void;
  activeKey: string;
  setActiveKey: (item: string) => void;
  activeVal: string;
  setActiveVal: (item: string) => void;
  appendWord: (item: string) => void;
  removeWord: (item: string) => void;
  translateWordsMap: TranslateWordsMap;
  sentenceWordMap: SentenceWordMap;
  updateSentenceWordMap: (k: string, v: SentencesWordValueObject) => void;
  multipleOptionsMap: MultipleOptionsMap;
  updateMultipleOptionsMap: (k: string, v: MultipleOptionsValueObject) => void;
}

export type ExerciseAnswer = Array<string>;

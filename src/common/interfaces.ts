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
  type: 'sk' | 'ua';
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
    tertiary: string;
    tertiaryOpaq: string;
    success: string;
  };
};

export interface StylesThemeProps {
  theme: CustomTheme;
}

// FIREBASE PROVIDER

export type ModuleMap = Map<string, Object>;

export interface FirebaseProviderOutput {
  getModule: (number: string) => void;
  wordsMap: ModuleMap;
  sentencesMap: ModuleMap;
  questionsMap: ModuleMap;
  loading: boolean;
  setLoading: (input: boolean) => void;
}

// EXERCISE PROVIDER
export type ExerciseCategory = 'words' | 'sentences' | 'questions' | 'stories';
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
export type SentenceWordsMap = Map<string, SentencesWordValueObject>;
export type MultipleOptionsMap = Map<string, MultipleOptionsValueObject>;

export interface ExerciseProviderOutput {
  loading: boolean;
  setExerciseCategory: (input: ExerciseCategory | undefined) => void;
  answer: Array<string>;
  setAnswer: (item: Array<string>) => void;
  correctAnswer: string;
  assignment: string;
  activeKey: string;
  setActiveKey: (item: string) => void;
  activeVal: string;
  setActiveVal: (item: string) => void;
  appendWord: (item: string) => void;
  removeWord: (item: string) => void;
  translateWordsMap: TranslateWordsMap;
  sentenceWordsMap: SentenceWordsMap;
  updateSentenceWordsMap: (k: string, v: SentencesWordValueObject) => void;
  multipleOptionsMap: MultipleOptionsMap;
  updateMultipleOptionsMap: (k: string, v: MultipleOptionsValueObject) => void;
}

export type ExerciseAnswer = Array<string>;

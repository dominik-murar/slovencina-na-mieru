export type ButtonType = 'default' | 'success';

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: ButtonType;
}

export interface PillProps {
  text: string;
  active: string;
  isCorrect?: boolean;
  returnActive: (item: string) => void;
}

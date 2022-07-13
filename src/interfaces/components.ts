export type ButtonType = 'default' | 'success';

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  type?: ButtonType;
  invisible?: boolean;
}

export interface PillProps {
  text: string;
  isActive: boolean;
  isCorrect?: boolean;
  returnActive: (item: string) => void;
}

import React from 'react';
import { ButtonProps } from '../../../common/interfaces';
import * as S from './Button.styles';

const Button = ({
  text,
  onPress,
  type = 'default',
  invisible,
}: ButtonProps) => {
  return (
    <S.Container
      onPress={onPress}
      type={type}
      invisible={invisible}
      disabled={invisible}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Button;

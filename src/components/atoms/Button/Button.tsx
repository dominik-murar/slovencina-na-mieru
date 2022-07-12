import React from 'react';
import {ButtonProps} from '../../../interfaces/components';
import * as S from './Button.styles';

const Button = ({text, onPress, type = 'default'}: ButtonProps) => {
  return (
    <S.Container onPress={onPress} type={type}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};

export default Button;

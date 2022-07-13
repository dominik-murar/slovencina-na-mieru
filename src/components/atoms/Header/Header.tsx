import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from '../../../providers/ThemeProvider';
import * as S from './Header.styles';

const Header = ({ title, navigation }) => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.BackButton onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={26} color={theme.colors.text} />
      </S.BackButton>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default Header;

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from '../../../providers/ThemeProvider';
import * as S from './FullscreenLoader.styles';

const FulscreenLoader = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </S.Container>
  );
};

export default FulscreenLoader;

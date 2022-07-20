import React, { useCallback, useEffect, useState } from 'react';
import { PillWordTranslateProps } from '../../../common/interfaces';
import { useTheme } from '../../../providers/ThemeProvider';
import * as S from './PillWordTranslate.styles';

const PillWordTranslate = ({
  text,
  isActive,
  isCorrect = false,
  returnActive,
}: PillWordTranslateProps) => {
  const theme = useTheme();
  const [state, setState] = useState<'default' | 'active' | 'correct'>(
    'default',
  );
  const backgroundColor = {
    default: 'transparent',
    active: theme.colors.primary,
    correct: theme.colors.primaryOpaq,
  };

  useEffect(() => {
    if (state === 'correct') return;
    if (isActive) {
      setState('active');
    } else {
      setState('default');
    }
    if (isCorrect) {
      setState('correct');
      returnActive('');
    }
  }, [isCorrect, isActive, state, returnActive]);

  const handlePress = useCallback(() => {
    if (state === 'correct') return;
    if (state === 'default') return returnActive(text);
    if (state === 'active') return returnActive('');
  }, [state]);

  return (
    <S.Container
      backgroundColor={backgroundColor[state]}
      onPress={handlePress}
      disabled={state === 'correct'}>
      <S.Text isDefault={state === 'default'}>{text}</S.Text>
    </S.Container>
  );
};

export default PillWordTranslate;
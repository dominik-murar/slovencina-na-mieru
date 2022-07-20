import React, { useCallback, useEffect, useState } from 'react';
import { PillWordTranslateProps } from '../../../common/interfaces';
import { useExercise } from '../../../providers/ExerciseProvider';
import { useTheme } from '../../../providers/ThemeProvider';
import * as S from './PillWordTranslate.styles';

const PillWordTranslate = ({
  text,
  isActive,
  isCorrect = false,
  type,
}: PillWordTranslateProps) => {
  const theme = useTheme();
  const { setActiveKey, setActiveVal } = useExercise();
  const [state, setState] = useState<'default' | 'active' | 'correct'>(
    'default',
  );
  const backgroundColor = {
    default: 'transparent',
    active: theme.colors.primary,
    correct: theme.colors.primaryOpaq,
  };

  const setActive = useCallback(
    (value: string) => {
      switch (type) {
        case 'key':
          return setActiveKey(value);
        case 'val':
          return setActiveVal(value);
      }
    },
    [type],
  );

  useEffect(() => {
    if (state === 'correct') return;
    if (isActive) {
      setState('active');
    } else {
      setState('default');
    }
    if (isCorrect) {
      setState('correct');
      setActive('');
    }
  }, [isCorrect, isActive, state]);

  const handlePress = useCallback(() => {
    if (state === 'correct') return;
    if (state === 'default') return setActive(text);
    if (state === 'active') return setActive('');
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

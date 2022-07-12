import React, {useEffect, useState} from 'react';
import {PillProps} from '../../../interfaces/components';
import {useTheme} from '../../../providers/ThemeProvider';
import * as S from './Pill.styles';

const Pill = ({text, active, isCorrect = false, returnActive}: PillProps) => {
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
    if (active === text) {
      setState('active');
    } else {
      setState('default');
    }
    if (isCorrect && active === text) {
      setState('correct');
      returnActive('');
    }
  }, [isCorrect, text, active, state, returnActive]);

  const handlePress = () => {
    if (state === 'correct') return;
    if (state === 'default') return returnActive(text);
    if (state === 'active') return returnActive('');
  };

  return (
    <S.Container
      backgroundColor={backgroundColor[state]}
      onPress={handlePress}
      disabled={state === 'correct'}>
      <S.Text isDefault={state === 'default'}>{text}</S.Text>
    </S.Container>
  );
};

export default Pill;

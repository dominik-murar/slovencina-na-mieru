import React from 'react';
import * as S from './WordBank.styles';
import PillWordBank from '../../atoms/PillWordBank/PillWordBank';
import { useExercise } from '../../../providers/ExerciseProvider';

const WordBank = () => {
  const { sentenceWordMap } = useExercise();
  const keys = [...sentenceWordMap.keys()];

  return (
    <S.Container>
      {keys.map(key => (
        <PillWordBank key={key} itemKey={key} inBank />
      ))}
    </S.Container>
  );
};

export default WordBank;

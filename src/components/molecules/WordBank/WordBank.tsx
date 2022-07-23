import React from 'react';
import * as S from './WordBank.styles';
import PillWordBank from '../../atoms/PillWordBank/PillWordBank';
import { useExercise } from '../../../providers/ExerciseProvider';

const WordBank = () => {
  const { wordBankMap } = useExercise();
  const keys = [...wordBankMap.keys()];

  return (
    <S.Container>
      {keys.map(key => (
        <PillWordBank key={key} itemKey={key} inBank />
      ))}
    </S.Container>
  );
};

export default WordBank;

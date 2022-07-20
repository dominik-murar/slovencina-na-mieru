import React from 'react';
import * as S from './MultipleChoiceBank.styles';
import { useExercise } from '../../../providers/ExerciseProvider';
import PillMultipleChoice from '../../atoms/PillMultipleChoice/PillMultipleChoice';

const MultipleChoiceBank = () => {
  const { sentenceWordBank } = useExercise();
  const keys = [...sentenceWordBank.keys()];

  return (
    <S.Container>
      {keys.map(key => (
        <PillMultipleChoice key={key} itemKey={key} />
      ))}
    </S.Container>
  );
};

export default MultipleChoiceBank;

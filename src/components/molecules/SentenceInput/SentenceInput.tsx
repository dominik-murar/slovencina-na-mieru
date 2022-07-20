import React from 'react';
import { useExercise } from '../../../providers/ExerciseProvider';
import PillWordBank from '../../atoms/PillWordBank/PillWordBank';
import * as S from './SentenceInput.styles';

const SentenceInput = () => {
  const { answer } = useExercise();
  return (
    <S.Container>
      <S.OutlinedField>
        <S.RowContainer>
          {answer.map(key => (
            <PillWordBank key={key} itemKey={key} />
          ))}
        </S.RowContainer>
      </S.OutlinedField>
    </S.Container>
  );
};

export default SentenceInput;

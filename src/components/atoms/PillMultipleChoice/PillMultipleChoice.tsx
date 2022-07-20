import React from 'react';
import { PillMultipleChoiceProps } from '../../../common/interfaces';
import { useExercise } from '../../../providers/ExerciseProvider';
import * as S from './PillMultipleChoice.styles';

const PillMultipleChoice = ({ itemKey }: PillMultipleChoiceProps) => {
  const { multipleOptionsMap, updateMultipleOptionsMap } = useExercise();

  const wordObj = multipleOptionsMap.get(itemKey);
  const word = wordObj?.word || '';
  const handlePress = () => {
    if (wordObj?.isSelected) {
      updateMultipleOptionsMap(itemKey, { word: word, isSelected: false });

      // removeWord(itemKey);
    } else {
      multipleOptionsMap.forEach((value, key) => {
        updateMultipleOptionsMap(key, {
          ...value,
          isSelected: value.word === word,
        });
      });
      // appendWord(itemKey);
    }
  };

  return (
    <S.Container
      onPress={handlePress}
      selected={wordObj?.isSelected}
      // disabled={wordObj?.isUsed && inBank}
    >
      <S.Text selected={wordObj?.isSelected}>{word}</S.Text>
    </S.Container>
  );
};

export default PillMultipleChoice;

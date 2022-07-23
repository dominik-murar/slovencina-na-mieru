import React from 'react';
import { PillMultipleChoiceProps } from '../../../common/interfaces';
import { useExercise } from '../../../providers/ExerciseProvider';
import * as S from './PillMultipleChoice.styles';

const PillMultipleChoice = ({ itemKey }: PillMultipleChoiceProps) => {
  const { setAnswer, multipleChoiceMap, updateMultipleChoiceMap } =
    useExercise();

  const phraseObj = multipleChoiceMap.get(itemKey);
  const phrase = phraseObj?.phrase || '';
  const handlePress = () => {
    if (phraseObj?.isSelected) {
      updateMultipleChoiceMap(itemKey, { phrase: phrase, isSelected: false });
      // removeWord(itemKey);
    } else {
      setAnswer(phrase);
      multipleChoiceMap.forEach((value, key) => {
        updateMultipleChoiceMap(key, {
          ...value,
          isSelected: value.phrase === phrase,
        });
      });
      // appendWord(itemKey);
    }
  };

  return (
    <S.Container
      onPress={handlePress}
      selected={phraseObj?.isSelected}
      // disabled={wordObj?.isUsed && inBank}
    >
      <S.Text selected={phraseObj?.isSelected}>{phrase}</S.Text>
    </S.Container>
  );
};

export default PillMultipleChoice;

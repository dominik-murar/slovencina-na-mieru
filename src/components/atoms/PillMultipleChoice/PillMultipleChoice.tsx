import React from 'react';
import { PillMultipleChoiceProps } from '../../../common/interfaces';
import { useExercise } from '../../../providers/ExerciseProvider';
import * as S from './PillMultipleChoice.styles';

const PillMultipleChoice = ({ itemKey }: PillMultipleChoiceProps) => {
  const { sentenceWordBank, updateSentenceWordBank } = useExercise();

  const wordObj = sentenceWordBank.get(itemKey);
  const word = wordObj?.word || '';
  const handlePress = () => {
    if (wordObj?.isUsed) {
      // handle press in Sentence Input box
      updateSentenceWordBank(itemKey, { word: word, isUsed: false });
      // removeWord(itemKey);
    } else {
      // handle press in WordBank
      updateSentenceWordBank(itemKey, { word: word, isUsed: true });
      // appendWord(itemKey);
    }
  };

  return (
    <S.Container
      onPress={handlePress}
      selected={wordObj?.isUsed}
      // disabled={wordObj?.isUsed && inBank}
    >
      <S.Text selected={wordObj?.isUsed}>{word}</S.Text>
    </S.Container>
  );
};

export default PillMultipleChoice;

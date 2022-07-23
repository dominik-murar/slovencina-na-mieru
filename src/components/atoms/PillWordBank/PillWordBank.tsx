import React from 'react';
import { PillWordBankProps } from '../../../common/interfaces';
import { useExercise } from '../../../providers/ExerciseProvider';
import * as S from './PillWordBank.styles';

const PillWordBank = ({ itemKey, inBank }: PillWordBankProps) => {
  const { appendWord, removeWord, wordBankMap, updateWordBankMap } =
    useExercise();

  const wordObj = wordBankMap.get(itemKey);
  const word = wordObj?.word || '';
  const handlePress = () => {
    if (wordObj?.isUsed) {
      // handle press in Sentence Input box
      updateWordBankMap(itemKey, { word: word, isUsed: false });
      removeWord(itemKey);
    } else {
      // handle press in WordBank
      updateWordBankMap(itemKey, { word: word, isUsed: true });
      appendWord(itemKey);
    }
  };

  return (
    <S.Container
      onPress={handlePress}
      inBank={inBank}
      disabled={wordObj?.isUsed && inBank}>
      <S.Text>{word}</S.Text>
    </S.Container>
  );
};

export default PillWordBank;

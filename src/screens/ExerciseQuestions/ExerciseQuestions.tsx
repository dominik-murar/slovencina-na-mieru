import React, { useState } from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import MultipleChoiceBank from '../../components/molecules/MultipleChoiceBank/MultipleChoiceBank';
import SentenceInput from '../../components/molecules/SentenceInput/SentenceInput';
import WordBank from '../../components/molecules/WordBank/WordBank';
import { useExercise } from '../../providers/ExerciseProvider';
import * as S from './ExerciseQuestions.styles';

// const mockWordsArray = [
//   'word1',
//   'longWord',
//   'wrd',
//   'wooord',
//   'wwrrddd',
//   'wow',
//   'a',
// ];

// {
//   ua: "ukrajinska veta"
//   sk: "sk veta" // porovnavat so vsetkymi keys ktore obsahuju sk - sk, sk_1, sk_2
// }

// [{key: '1', word: 'sk', isUsed: false}, {key: '2', word: 'veta', isUsed: false}]

const ExerciseQuestions = ({ navigation }) => {
  const { setAnswer } = useExercise();
  const [responseType] = useState<'words' | 'choice'>('choice');

  const handleContinuePress = () => {
    setAnswer([]);
    navigation.navigate('Home');
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.CenterContainer>
          <S.Text>Slovenská otázka?</S.Text>
          {responseType === 'words' ? <SentenceInput /> : null}
        </S.CenterContainer>
        {responseType === 'words' ? <WordBank /> : <MultipleChoiceBank />}
      </S.Container>
      <Button
        text="Správne! Pokračovať"
        onPress={handleContinuePress}
        type="default"
      />
      <BottomSafeArea />
    </S.Wrapper>
  );
};

export default ExerciseQuestions;

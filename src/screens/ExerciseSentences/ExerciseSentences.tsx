import React from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import SentenceInput from '../../components/molecules/SentenceInput/SentenceInput';
import WordBank from '../../components/molecules/WordBank/WordBank';
import { useExercise } from '../../providers/ExerciseProvider';
import * as S from './ExerciseSentences.styles';

const ExerciseSentences = ({ navigation }) => {
  const { setAnswer } = useExercise();

  const handleContinuePress = () => {
    setAnswer([]);
    navigation.navigate('Home');
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.CenterContainer>
          <S.Text>Ukrajinská veta na preloženie</S.Text>
          <SentenceInput />
        </S.CenterContainer>
        <WordBank />
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

export default ExerciseSentences;

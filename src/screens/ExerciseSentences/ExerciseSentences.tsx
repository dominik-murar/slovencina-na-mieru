import React, { useEffect } from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import SentenceInput from '../../components/molecules/SentenceInput/SentenceInput';
import WordBank from '../../components/molecules/WordBank/WordBank';
import { useExercise } from '../../providers/ExerciseProvider';
import FulscreenLoader from '../../components/atoms/FullscreenLoader/FullscreenLoader';
import * as S from './ExerciseSentences.styles';

const ExerciseSentences = ({ navigation }) => {
  const { setAnswer, assignment, setExerciseCategory, loading } = useExercise();

  const handleContinuePress = () => {
    setAnswer([]);
    navigation.navigate('Home');
  };

  useEffect(() => setExerciseCategory('sentences'), []);

  return (
    <S.Wrapper>
      {loading ? <FulscreenLoader /> : null}
      <S.Container>
        <S.CenterContainer>
          <S.Text>{assignment}</S.Text>
          <SentenceInput />
        </S.CenterContainer>
        <WordBank />
      </S.Container>
      <Button text="Potvrdiť" onPress={handleContinuePress} type="default" />
      <BottomSafeArea />
    </S.Wrapper>
  );
};

export default ExerciseSentences;

import React, { useEffect } from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import SentenceInput from '../../components/molecules/SentenceInput/SentenceInput';
import WordBank from '../../components/molecules/WordBank/WordBank';
import { useExercise } from '../../providers/ExerciseProvider';
import FulscreenLoader from '../../components/atoms/FullscreenLoader/FullscreenLoader';
import * as S from './ExerciseSentences.styles';

const ExerciseSentences = ({ navigation }) => {
  const { setAnswer, assignment, setExerciseType, loading } = useExercise();

  const handleContinuePress = () => {
    setAnswer([]);
    navigation.navigate('Home');
  };

  useEffect(() => setExerciseType('sentences'), []);

  if (loading) {
    return <FulscreenLoader />;
  }

  return (
    <S.Wrapper>
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

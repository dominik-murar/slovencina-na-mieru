import React from 'react';
import BottomSafeArea from '../../components/atoms/BottomSafeArea/BottomSafeArea';
import Button from '../../components/atoms/Button/Button';
import * as S from './ExerciseSentences.styles';

const ExerciseSentences = ({ navigation }) => {
  return (
    <S.Container>
      <S.ExerciseContainer></S.ExerciseContainer>
      <Button
        text="Správne! Pokračovať"
        onPress={() => navigation.navigate('Home')}
        type="success"
        // invisible={nOfCompleted < shuffledKeys.length}
      />
      <BottomSafeArea />
    </S.Container>
  );
};

export default ExerciseSentences;

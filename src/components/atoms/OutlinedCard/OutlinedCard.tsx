import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as S from './OutlinedCard.styles';

interface Iprops {
  category: string;
  status: number;
  goal: number;
  onPress?: () => void;
}

const OutlinedCard = ({category, status, goal, onPress}: Iprops) => {
  return (
    <S.Card onPress={onPress}>
      <S.Heading>{category}</S.Heading>
      <ProgressBar status={status} goal={goal} />
    </S.Card>
  );
};

export default OutlinedCard;

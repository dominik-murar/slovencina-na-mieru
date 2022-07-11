import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import * as S from './OutlinedCard.styles';

interface Iprops {
  category: string;
  status: number;
  goal: number;
}

const OutlinedCard = ({category, status, goal}: Iprops) => {
  return (
    <S.Card onPress={() => console.log(category, 'pressed')}>
      <S.Heading>{category}</S.Heading>
      <ProgressBar status={status} goal={goal} />
    </S.Card>
  );
};

export default OutlinedCard;

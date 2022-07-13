import React from 'react';
import * as S from './ProgressBar.styles';

interface Iprops {
  status: number;
  goal: number;
}

const ProgressBar = ({ status, goal }: Iprops) => {
  return (
    <S.Bar>
      <S.Status>{`${status}/${goal}`}</S.Status>
      <S.Bar isSolid width={((status / goal) * 100).toString()} />
    </S.Bar>
  );
};

export default ProgressBar;

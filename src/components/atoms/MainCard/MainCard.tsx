import React from 'react';
import * as S from './MainCard.styles';

interface Iprops {
  item: {key: number; module: String; benefits: Array<String>};
}

const MainCard = ({item}: Iprops) => {
  return (
    <S.Card onPress={console.log(item.module, 'pressed')}>
      <S.Heading>{item.module}</S.Heading>
      <S.FeatureListItem>{item.benefits[0]}</S.FeatureListItem>
      <S.FeatureListItem>{item.benefits[1]}</S.FeatureListItem>
      <S.FeatureListItem>{item.benefits[2]}</S.FeatureListItem>
    </S.Card>
  );
};

export default MainCard;

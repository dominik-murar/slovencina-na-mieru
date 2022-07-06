import React from 'react';
import * as S from './MainCard.styles';
import Icon from 'react-native-vector-icons/Octicons';

interface Iprops {
  item: {key: number; module: String; benefits: Array<String>; locked: boolean};
}

const MainCard = ({item}: Iprops) => {
  return (
    <S.Card
      disabled={item.locked}
      onPress={() => console.log(item.module, 'pressed')}>
      <S.RowContainer>
        <S.InfoContainer>
          <S.Heading>{item.module}</S.Heading>
          <S.FeatureListItem>{item.benefits[0]}</S.FeatureListItem>
          <S.FeatureListItem>{item.benefits[1]}</S.FeatureListItem>
          <S.FeatureListItem>{item.benefits[2]}</S.FeatureListItem>
        </S.InfoContainer>

        {!item.locked ? (
          <S.EnterButton>
            <Icon name="chevron-right" size={24} color="white" />
          </S.EnterButton>
        ) : (
          <Icon name="lock" size={24} color="white" />
        )}
      </S.RowContainer>
      {item.locked && (
        <S.LockedMessage>(ešte XY bodov pre odomknutie)</S.LockedMessage>
      )}
    </S.Card>
  );
};

export default MainCard;

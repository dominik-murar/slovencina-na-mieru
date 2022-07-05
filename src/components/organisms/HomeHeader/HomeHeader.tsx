import React from 'react';
import HomeStats from '../../molecules/HomeStats/HomeStats';
import * as S from './HomeHeader.styles';
import {Text} from 'react-native';

const HomeHeader = () => {
  return (
    <S.Container>
      <S.ActionRow>
        <Text>Blabla</Text>
      </S.ActionRow>
      <HomeStats />
    </S.Container>
  );
};

export default HomeHeader;

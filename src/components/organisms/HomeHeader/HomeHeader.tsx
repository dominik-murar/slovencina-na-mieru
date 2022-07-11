import React from 'react';
import HomeStats from '../../molecules/HomeStats/HomeStats';
import * as S from './HomeHeader.styles';
import Icon from 'react-native-vector-icons/Octicons';
import {useTheme} from '../../../providers/ThemeProvider';
import {TouchableOpacity} from 'react-native';

const HomeHeader = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.ActionRow>
        <TouchableOpacity>
          <Icon name="gear" size={20} color={theme.colors.text} />
        </TouchableOpacity>
      </S.ActionRow>
      <HomeStats />
    </S.Container>
  );
};

export default HomeHeader;

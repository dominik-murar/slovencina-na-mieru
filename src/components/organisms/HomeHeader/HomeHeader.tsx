import React from 'react';
import HomeStats from '../../molecules/HomeStats/HomeStats';
import * as S from './HomeHeader.styles';
import Icon from 'react-native-vector-icons/Octicons';
import { useTheme } from '../../../providers/ThemeProvider';
import { TouchableOpacity } from 'react-native';
import { ScreenNames } from '../../../common/enum';

const HomeHeader = ({ navigation }) => {
  const theme = useTheme();
  return (
    <S.Container>
      <S.ActionRow>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.Settings)}>
          <Icon name="gear" size={20} color={theme.colors.text} />
        </TouchableOpacity>
      </S.ActionRow>
      <HomeStats />
    </S.Container>
  );
};

export default HomeHeader;

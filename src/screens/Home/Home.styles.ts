import styled from 'styled-components/native';
import { StylesThemeProps } from '../../common/interfaces';

export const FlatList = styled.FlatList.attrs(
  ({ theme }: StylesThemeProps) => ({
    contentContainerStyle: {
      paddingHorizontal: 24,
      paddingTop: 24,
      paddingBottom: 8,
      backgroundColor: theme.colors.background,
    },
  }),
)``;

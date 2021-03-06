import styled from 'styled-components/native';
import { StylesThemeProps } from '../../common/interfaces';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-vertical: 24px;
`;

export const Categories = styled.View``;

export const ScrollView = styled.ScrollView.attrs(
  ({ theme }: StylesThemeProps) => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingHorizontal: 24,
      backgroundColor: theme.colors.background,
    },
  }),
)``;

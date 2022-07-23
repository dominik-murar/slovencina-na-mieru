import styled from 'styled-components/native';
import { StylesThemeProps } from '../../../common/interfaces';

export const Container = styled.View``;

export const OutlinedField = styled.View<StylesThemeProps>`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding: 16px;
  min-height: 200px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

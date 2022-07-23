import styled from 'styled-components/native';
import { StylesThemeProps } from '../../../common/interfaces';

export const Container = styled.View`
  align-items: center;
  padding-vertical: 80px;
`;

export const TextPrimary = styled.Text<StylesThemeProps>`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Text = styled.Text<StylesThemeProps>`
  color: ${({ theme }) => theme.colors.text};
`;

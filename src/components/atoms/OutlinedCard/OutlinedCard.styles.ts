import styled from 'styled-components/native';
import { CustomTheme, StylesThemeProps } from '../../../common/interfaces';

interface CardProps {
  disabled: boolean;
  theme: CustomTheme;
}

export const Card = styled.TouchableOpacity<CardProps>`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Heading = styled.Text<StylesThemeProps>`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: 16px;
`;

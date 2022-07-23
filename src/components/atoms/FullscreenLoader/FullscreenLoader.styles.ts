import styled from 'styled-components/native';
import { StylesThemeProps } from '../../../common/interfaces';

export const Container = styled.View<StylesThemeProps>`
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

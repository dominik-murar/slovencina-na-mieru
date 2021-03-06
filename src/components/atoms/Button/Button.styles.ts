import styled from 'styled-components/native';
import { ButtonType, CustomTheme } from '../../../common/interfaces';

interface Button {
  type: ButtonType;
  invisible: boolean;
  theme: CustomTheme;
}

export const Container = styled.TouchableOpacity<Button>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === 'success' ? theme.colors.success : theme.colors.secondary};
  padding-vertical: 14px;
  border-radius: 50px;
  opacity: ${({ invisible }) => (invisible ? 0 : 1)};
`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
`;

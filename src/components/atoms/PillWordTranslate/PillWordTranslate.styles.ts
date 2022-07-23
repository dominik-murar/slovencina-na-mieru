import styled from 'styled-components/native';
import { CustomTheme } from '../../../common/interfaces';

interface IContainer {
  backgroundColor: string;
  type: string;
  theme: CustomTheme;
}
interface IText {
  isDefault: boolean;
  theme: CustomTheme;
}

export const Container = styled.TouchableOpacity<IContainer>`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ type, theme }) =>
    type === 'sk' ? theme.colors.primary : theme.colors.tertiary};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 16px;
  margin-bottom: 16px;
`;

export const Text = styled.Text<IText>`
  color: ${({ isDefault, theme }) => (isDefault ? theme.colors.text : 'white')};
  font-size: 15px;
  font-weight: 500;
`;

import styled from 'styled-components/native';
import { CustomTheme } from '../../../common/interfaces';

interface IContainer {
  disabled: boolean;
  selected: boolean;
  theme: CustomTheme;
}
interface IText {
  selected: boolean;
  theme: CustomTheme;
}

export const Container = styled.TouchableOpacity<IContainer>`
  width: 100%;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : 'transparent'};
  padding: 16px;
  margin-bottom: 8px;
`;

export const Text = styled.Text<IText>`
  color: ${({ selected, theme }) => (selected ? 'white' : theme.colors.text)};
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;

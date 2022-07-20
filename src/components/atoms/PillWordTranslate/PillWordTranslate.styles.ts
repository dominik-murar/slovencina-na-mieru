import styled from 'styled-components/native';

interface IContainer {
  backgroundColor: string;
}
interface IText {
  isDefault: boolean;
}

export const Container = styled.TouchableOpacity<IContainer>`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 16px;
  margin-bottom: 16px;
  margin-horizontal: 0px;
  align-self: baseline;
`;

export const Text = styled.Text<IText>`
  color: ${({ isDefault, theme }) => (isDefault ? theme.colors.text : 'white')};
  font-size: 15px;
  font-weight: 500;
`;
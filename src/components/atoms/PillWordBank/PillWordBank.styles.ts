import styled from 'styled-components/native';

interface IContainer {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity<IContainer>`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding: 16px;
  margin-bottom: 8px;
  margin-horizontal: 4px;
  align-self: baseline;
  opacity: ${({ disabled }) => (disabled ? 0 : 1)};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  font-weight: 500;
`;

import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.secondary};
  padding-vertical: 14px;
  border-radius: 50px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
`;

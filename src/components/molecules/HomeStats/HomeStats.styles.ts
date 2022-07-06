import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding-vertical: 80px;
`;

export const TextPrimary = styled.Text`
  font-size: 40px;
  color: ${({theme}) => theme.colors.text};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;

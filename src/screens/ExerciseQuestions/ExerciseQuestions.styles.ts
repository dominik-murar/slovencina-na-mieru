import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: 24px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  padding-bottom: 24px;
`;

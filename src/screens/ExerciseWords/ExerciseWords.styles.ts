import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    padding: 24,
  },
})``;

export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  padding-bottom: 32px;
`;

export const PillsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftColumn = styled.View`
  align-items: flex-start;
`;

export const RightColumn = styled.View`
  align-items: flex-end;
`;

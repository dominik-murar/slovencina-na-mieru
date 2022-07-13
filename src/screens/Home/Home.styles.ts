import styled from 'styled-components/native';

export const FlatList = styled.FlatList.attrs(({ theme }) => ({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 8,
    backgroundColor: theme.colors.background,
  },
}))``;

import styled from 'styled-components/native';

export const Container = styled.View``;

export const OutlinedField = styled.View`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding: 16px;
  min-height: 200px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

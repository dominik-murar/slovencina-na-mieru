import styled from 'styled-components/native';

interface CardProps {
  disabled: boolean;
}

export const Card = styled.TouchableOpacity<CardProps>`
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.primary};
  background-color: transparent;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Heading = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  padding-bottom: 16px;
`;

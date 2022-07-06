import styled from 'styled-components/native';

interface CardProps {
  disabled: boolean;
}

export const Card = styled.TouchableOpacity<CardProps>`
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.primary};
  padding: 24px;
  margin-bottom: 16px;
  opacity: ${({disabled}) => (disabled ? 0.6 : 1)};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Heading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding-right: 8px;
`;

export const FeatureListItem = styled.Text`
  font-size: 17px;
  color: white;
`;

export const EnterButton = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;

export const LockedMessage = styled.Text`
  font-size: 14px;
  color: white;
`;

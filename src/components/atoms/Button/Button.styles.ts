import styled from 'styled-components/native';
import {ButtonType} from '../../../interfaces/components';

interface Button {
  type: ButtonType;
}

export const Container = styled.TouchableOpacity<Button>`
  align-items: center;
  justify-content: center;
  background-color: ${({theme, type}) =>
    type === 'success' ? theme.colors.success : theme.colors.secondary};
  padding-vertical: 14px;
  border-radius: 50px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
`;

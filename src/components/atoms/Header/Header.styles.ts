import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${Platform.OS === 'ios' ? '44px' : '56px'};
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
  text-align: center;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 99;
  left: 14px;
  width: 40px;
  height: 40px;
  justify-content: center;
  padding-left: 10px;
`;

import styled from 'styled-components/native';

interface BarColor {
  isSolid?: boolean;
  width?: string;
}

export const Bar = styled.View<BarColor>`
  width: ${({width}) => (!!width ? width + '%' : '100%')};
  height: 54px;
  background-color: ${({theme, isSolid}) =>
    isSolid ? theme.colors.primary : theme.colors.primaryOpaq};
  border-radius: 10px;
  justify-content: center;
`;

export const Status = styled.Text`
  z-index: 1;
  position: absolute;
  color: white;
  font-size: 16px;
  align-self: center;
  text-align: center;
`;

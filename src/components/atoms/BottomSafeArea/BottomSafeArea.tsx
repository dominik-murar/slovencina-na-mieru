import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Iprops {
  children?: React.ReactNode;
}

const BottomSafeArea = ({children}: Iprops) => (
  <SafeAreaView edges={['bottom']}>{children}</SafeAreaView>
);

export default BottomSafeArea;

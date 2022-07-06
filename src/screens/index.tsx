import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home/Home';
import {useTheme} from '../providers/ThemeProvider';

const Stack = createNativeStackNavigator();

const Screens = () => {
  const {theme, isDarkMode} = useTheme();
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: theme.colors.background}}
      edges={['top', 'left', 'right']}>
      <StatusBar barStyle={theme.barStyle} backgroundColor={'transparent'} />
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Screens;

import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home/Home';
import { useTheme } from '../providers/ThemeProvider';
import Module from './Module/Module';
import Header from '../components/atoms/Header/Header';
import ExerciseWords from './ExerciseWords/ExerciseWords';
import ExerciseSentences from './ExerciseSentences/ExerciseSentences';
import ExerciseQuestions from './ExerciseQuestions/ExerciseQuestions';

const Stack = createNativeStackNavigator();

const Screens = () => {
  const theme = useTheme();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      edges={['top', 'left', 'right']}>
      <StatusBar barStyle={theme.barStyle} backgroundColor={'transparent'} />
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Module"
            component={Module}
            options={{
              header: ({ navigation }) => (
                <Header title="MODUL" navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="ExerciseWords"
            component={ExerciseWords}
            options={{
              header: ({ navigation }) => (
                <Header title="Words" navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="ExerciseSentences"
            component={ExerciseSentences}
            options={{
              header: ({ navigation }) => (
                <Header title="Sentences" navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="ExerciseQuestions"
            component={ExerciseQuestions}
            options={{
              header: ({ navigation }) => (
                <Header title="Questions" navigation={navigation} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Screens;

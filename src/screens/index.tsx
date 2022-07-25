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
import ExerciseSentencesQuestions from './ExerciseSentencesQuestions/ExerciseSentencesQuestions';
import { useAuth } from '../providers/AuthProvider';
import Login from './Login/Login';
import Settings from './Settings/Settings';

const Stack = createNativeStackNavigator();

const Screens = () => {
  const theme = useTheme();
  const { intializing, user } = useAuth();

  if (intializing) return null;

  if (!user) {
    return <Login />;
  }
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
            name="ExerciseSentencesQuestions"
            component={ExerciseSentencesQuestions}
            options={{
              header: ({ navigation }) => (
                <Header title="Sentences" navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              header: ({ navigation }) => (
                <Header title="Settings" navigation={navigation} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Screens;

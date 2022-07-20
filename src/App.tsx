import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { ExerciseProvider } from './providers/ExerciseProvider';
import { FirebaseProvider } from './providers/FirebaseProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import Screens from './screens';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <FirebaseProvider>
          <ExerciseProvider>
            <Screens />
          </ExerciseProvider>
        </FirebaseProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

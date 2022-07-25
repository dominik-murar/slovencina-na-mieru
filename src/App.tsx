import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { AuthProvider } from './providers/AuthProvider';
import { ExerciseProvider } from './providers/ExerciseProvider';
import { FirebaseProvider } from './providers/FirebaseProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import Screens from './screens';
import './translations';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <AuthProvider>
          <FirebaseProvider>
            <ExerciseProvider>
              <Screens />
            </ExerciseProvider>
          </FirebaseProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

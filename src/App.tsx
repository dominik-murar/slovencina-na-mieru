import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ThemeProvider} from './providers/ThemeProvider';
import Screens from './screens';

const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider>
        <Screens />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

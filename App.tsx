import React from 'react';
import { ThemeProvider } from './src/providers/theme';

import { Screens } from './src/screens';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Screens />
    </ThemeProvider>
  );
};
export default App;

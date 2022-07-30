import React, { useState } from 'react';

import { defaultTheme } from '../lib/constants';
import { ThemeState, ThemeContext } from '../lib/context/theme';

export const ThemeProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<ThemeState>({
    currentTheme: defaultTheme,
  });

  const setTheme = (theme: string) => {
    switch (theme) {
      case 'default':
        setState({ currentTheme: defaultTheme });
        break;
      default:
        setState({
          currentTheme: defaultTheme,
        });
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ state, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

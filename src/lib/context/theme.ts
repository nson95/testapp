import { createContext } from 'react';

import { Theme } from '../../models/Theme';

export interface ThemeState {
  currentTheme: Theme;
}

interface ThemeContextProps {
  state: ThemeState;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

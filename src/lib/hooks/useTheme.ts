import { useContext } from 'react';

import { ThemeContext } from '../context/theme';

export const useTheme = () => {
  const { state, setTheme } = useContext(ThemeContext);

  return {
    ...state,
    setTheme,
  };
};

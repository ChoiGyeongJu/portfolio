import { useContext } from 'react';

import { DarkModeContext } from 'context';

export const useDarkmode = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('useDarkmode must be used within a DarkModeProvider');
  }
  return context;
};

import React, { createContext, useState, ReactNode } from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  body, header {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2f3437' : '#ffffff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#ebebeb' : '#000000')};
  }
`;

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={{ isDarkMode }}>
        <GlobalStyle isDarkMode={isDarkMode} />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

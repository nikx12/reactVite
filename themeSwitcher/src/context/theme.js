import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;


// custom hook used for using theme context directly
export default function useTheme() {
    return useContext(ThemeContext);
}
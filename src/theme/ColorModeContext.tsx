import { createTheme, PaletteMode, ThemeProvider, useMediaQuery } from "@mui/material";
import { createContext, useMemo, useState } from "react";

interface IColorModeContext {
    toggleColorMode: () => void;
    mode: PaletteMode;
}

export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => { },
    mode: 'light',
});

export const ColorModeContextProvider = ({ children }: any) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    
    const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light')

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            console.log('Toggle!')
            setMode((prevMode: PaletteMode) => {
                console.log('old Mode:', prevMode);
                const newMode = prevMode === 'light' ? 'dark' : 'light';

                console.log('new Mode:', newMode);
                return newMode;
            });
        },
        mode,
    }),
        [mode])

    const theme = useMemo(() => (createTheme({
        palette: {
            mode,
            success: {
                main: '#0CE362'
            }
        },
        typography: {
            fontFamily: `Quicksand, sans-serif`,
            fontSize: 14,
        }
    })), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode} >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider >
    )
};
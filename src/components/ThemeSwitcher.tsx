import { DarkMode, LightMode } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useColorMode } from "../hooks/useColorMode";

export function ThemeSwitcher() {
    const [mode, toggleMode] = useColorMode();

    return (
        <>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
            }} onClick={() => {
                toggleMode();
            }}>
                {mode === 'dark' ? <DarkMode/> : <LightMode />}
            </Box>
        </>
    )
}
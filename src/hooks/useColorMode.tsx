import { useContext } from "react";
import { ColorModeContext } from "../theme/ColorModeContext";

export function useColorMode() {
    const colorMode = useContext(ColorModeContext);

    return [colorMode.mode, colorMode.toggleColorMode] as const;
}
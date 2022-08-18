import { useTheme } from "@mui/material";
import styled from "styled-components";
import { useColorMode } from "../hooks/useColorMode";

interface IProps {
    // theme: Theme
}

export function NotFound(props: IProps) {
    console.log("Props:", props)

    const theme = useTheme();
    
    const [mode] = useColorMode();

    const Wrapper = styled.div`
        width: 100%;
        height: 100%;
        background-color: ${theme.palette.background.default};
    `;
    
    return (
        <Wrapper>
            <h1>404</h1>
            <h3>Nothings Here</h3>
        </Wrapper>
    )
}
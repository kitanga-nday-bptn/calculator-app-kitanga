import { useTheme } from "@mui/material";
import styled from "styled-components";
import { useColorMode } from "../../hooks/useColorMode";

export const Wrapper = ({ children }: any) => {
    const theme = useTheme()
    const [mode] = useColorMode();

    const Wrapper = styled.div`
        background-color: ${theme.palette.background.default};
        width: 100%;
        height: 100%;
    `;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}
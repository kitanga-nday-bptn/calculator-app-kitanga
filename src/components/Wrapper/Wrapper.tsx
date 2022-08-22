import { useTheme } from "@mui/material";
import styled from "styled-components";
import { useColorMode } from "../../hooks/useColorMode";

export const Wrapper = ({ children }: any) => {
    const theme = useTheme()
    const [mode] = useColorMode();

    const Wrapper = styled.div`
        background-color: ${theme.palette.background.default};
        background-image: linear-gradient(304deg, rgba(57,242,250,1) 0%, rgba(57,242,250,1) 14%, rgba(80,255,251,1) 14%, rgba(80,255,251,1) 86%, rgba(57,242,250,1) 86%, rgba(57,242,250,1) 100%);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 300px;
    `;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}
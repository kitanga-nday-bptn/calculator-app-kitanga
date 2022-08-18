import { Backspace } from "@mui/icons-material";
import { Container } from "@mui/material";
import { StyledButton } from "./StyledButton";
import { StyledStack } from "./StyledStack";

export function Buttons() {
    return (
        <Container sx={{
            maxWidth: '375px !important',
            height: '50%',
            flexGrow: 1,
        }}>
            <StyledStack>
                <StyledButton color="error" variant="contained">C</StyledButton>
                <StyledButton sx={{
                    visibility: 'hidden',
                }} variant="contained">9</StyledButton>
                <StyledButton sx={{
                    visibility: 'hidden',
                }} variant="contained">8</StyledButton>
                <StyledButton color="error" variant="outlined"><Backspace /></StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton variant="contained">7</StyledButton>
                <StyledButton variant="contained">8</StyledButton>
                <StyledButton variant="contained">9</StyledButton>
                <StyledButton variant="outlined">+</StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton variant="contained">4</StyledButton>
                <StyledButton variant="contained">5</StyledButton>
                <StyledButton variant="contained">6</StyledButton>
                <StyledButton variant="outlined">-</StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton variant="contained">1</StyledButton>
                <StyledButton variant="contained">2</StyledButton>
                <StyledButton variant="contained">3</StyledButton>
                <StyledButton variant="outlined">×</StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton variant="contained">0</StyledButton>
                <StyledButton variant="outlined">.</StyledButton>
                <StyledButton color="success" variant="contained">=</StyledButton>
                <StyledButton variant="outlined">/</StyledButton>
            </StyledStack>
        </Container>
    )
}
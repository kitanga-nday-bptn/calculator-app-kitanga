import { Backspace } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useColorMode } from "../../hooks/useColorMode";
import SoundManager from "../../managers/SoundManager";
import { StyledButton } from "../StyledButton/StyledButton";
import { StyledStack } from "../StyledStack/StyledStack";

interface IProps {
    buttonPressed: (val: number | string) => void;
    resetInput: () => void;
    deleteChar: () => void;
    negate: () => void;
}

export function Buttons(props: IProps) {
    const [mode] = useColorMode();

    const lightSecondaryButtonBGColor = "rgb(33 17 66 / 28%)"
    const lightPrimaryActionBGColor = '#00e7ff';
    const lightPrimaryActionTextColor = '#28118d';
    const lightCancelButtonBGColor = '#fe72d6';

    return (
        <Box className='box-container' sx={{
            // maxWidth: '375px !important',
            width: '100%',
            // maxHeight: '52%',
            flexGrow: 1,
        }}>
            <StyledStack>
                <StyledButton onClick={() => {
                    SoundManager.playTap();
                    props.resetInput();
                }} lightBg={lightCancelButtonBGColor} mode={mode}>C</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey='[' lightBg={lightSecondaryButtonBGColor} mode={mode}>(</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey=']' lightBg={lightSecondaryButtonBGColor} mode={mode}>)</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey='/' lightBg={lightSecondaryButtonBGColor} mode={mode}>/</StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={7} mode={mode}>7</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={8} mode={mode}>8</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={9} mode={mode}>9</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey="*" lightBg={lightSecondaryButtonBGColor} mode={mode}>×</StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={4} mode={mode}>4</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={5} mode={mode}>5</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={6} mode={mode}>6</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey="-" lightBg={lightSecondaryButtonBGColor} mode={mode}>-</StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={1} mode={mode}>1</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={2} mode={mode}>2</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={3} mode={mode}>3</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey="+" lightBg={lightSecondaryButtonBGColor} mode={mode}>+</StyledButton>
            </StyledStack>
            <br />
            <StyledStack>
                <StyledButton buttonPressed={props.buttonPressed} inputKey='.' mode={mode}>.</StyledButton>
                <StyledButton buttonPressed={props.buttonPressed} inputKey={0} mode={mode}>0</StyledButton>
                <StyledButton mode={mode} lightBg={lightCancelButtonBGColor}
                    onClick={() => {
                        SoundManager.playTap();
                        props.deleteChar();
                    }}
                ><Backspace /></StyledButton>
                <StyledButton
                    // lightBg={lightPrimaryActionBGColor}
                    // textColor={lightPrimaryActionTextColor}
                    mode={mode}
                    onClick={() => {
                        SoundManager.playTap();
                        props.negate();
                    }}
                >
                    +/-
                </StyledButton>
            </StyledStack>
        </Box>
    )
}
import { Button, PaletteMode, PropTypes, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import SoundManager from "../../managers/SoundManager";

interface IProps {
    variant?: "text" | "outlined" | "contained" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    sx?: SxProps<Theme>;
    children?: any;
    onClick?: () => void;
    mode?: PaletteMode;
    lightBg?: string;
    darkBg?: string;
    textColor?: string;
    inputKey?: number | string;
    buttonPressed?: (val: number | string) => void;
}

export const StyledButton = (props: IProps) => {
    const lightBg = props.lightBg || 'rgb(222 222 222 / 34%)';
    const darkBg = props.darkBg || 'rgb(222 222 222 / 34%)';

    return <Button variant={props.variant} color={props.color} sx={{
        aspectRatio: '1',
        width: '10%',
        borderRadius: '50%',
        backgroundColor: `${props.mode === 'light' ? lightBg : darkBg}`,
        color: props.textColor || "white",
        fontWeight: 700,
        fontSize: '17px',
        ...props.sx,
    }} onClick={() => {
        props.onClick ? props.onClick() : (() => {
            SoundManager.playTap();

            if (typeof props.inputKey === 'number' || typeof props.inputKey === 'string') {
                props.buttonPressed && props.buttonPressed(props.inputKey);
                console.log('button tapped:', props.inputKey);
            }
        })();
    }}>
        {props.children}
    </Button>
};
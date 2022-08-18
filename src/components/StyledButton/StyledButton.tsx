import { Button, PropTypes, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import SoundManager from "../../managers/SoundManager";

interface IProps {
    variant?: "text" | "outlined" | "contained" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    sx?: SxProps<Theme>;
    children?: any;
    onClick?: () => void;
}

export const StyledButton = (props: IProps) => {
    return <Button variant={props.variant} color={props.color} sx={{
        aspectRatio: '1',
        width: '10%',
        borderRadius: '50%',
        ...props.sx,
    }} onClick={() => {
        props.onClick && props.onClick();
        SoundManager.playTap();
    }}>
        {props.children}
    </Button>
};
import { Button, PropTypes, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
    variant?: "text" | "outlined" | "contained" | undefined;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    sx?: SxProps<Theme>;
    children?: any;
}

export const StyledButton = (props: IProps) => {
    return <Button variant={props.variant} color={props.color} sx={{
        aspectRatio: '1',
        width: 52,
        ...props.sx,
    }}>
        {props.children}
    </Button>
};
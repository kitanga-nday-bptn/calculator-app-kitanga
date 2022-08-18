import { Stack } from "@mui/material";

export const StyledStack = ({ children }: any) => (<Stack
    direction='row'
    spacing={1}
    justifyContent="space-between"
    alignItems="center"
    height={'20%'}
>{children}</Stack>);
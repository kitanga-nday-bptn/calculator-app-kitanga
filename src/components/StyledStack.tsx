import { Stack } from "@mui/material";

export const StyledStack = ({ children }: any) => (<Stack
    direction='row'
    spacing={2}
    justifyContent="space-between"
    alignItems="center"
>{children}</Stack>);
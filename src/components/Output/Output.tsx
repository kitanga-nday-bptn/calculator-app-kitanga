import { Box, Paper } from "@mui/material";

interface IProps {
    output?: string;
}

export function Output(props: IProps) {
    return (
        <Box id="output" sx={{
            width: '100%',
            height: '10%',
            padding: '1%'
        }}>
            <Paper id="output-value" elevation={0} sx={{
                width: '100%',
                height: '100%',
                textAlign: 'right',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingRight: '1%',
                backgroundColor: 'transparent',
                color: 'white',
                fontWeight: 500,
                fontSize: '90%',
            }}>{props.output}</Paper>
        </Box>
    )
}
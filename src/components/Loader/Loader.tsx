import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {Box, Container} from '@mui/material';

export default function Loader() {
    return (
        <Container maxWidth="xl">
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <CircularProgress />
            </Box>
        </Container>
    );
}
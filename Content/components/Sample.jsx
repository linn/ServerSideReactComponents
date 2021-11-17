import React from 'react';
import Typography from '@mui/material/Typography';


export default function Sample({name}) {
        return <Typography variant="h1">
                Hello {name} I am a react component that was rendered on the server :)
            </Typography>;
}

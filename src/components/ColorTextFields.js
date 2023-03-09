import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch', color: 'white' },
        '.MuiInputBase-input': { color: 'white' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="why was it a good day?" variant="filled" color="success" focused />
      <TextField label="anything different today from other days?" variant="filled" color="success" focused />
      <TextField label="post a pic of the day!" variant="filled" color="success" focused />
      <TextField label="anything else?" variant="filled" color="success" focused />

    </Box>
  );
}
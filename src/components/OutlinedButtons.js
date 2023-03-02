import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function OutlinedButtons() {
  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>


      <Button variant="outlined" size='large' href="/addpet">
        <Typography variant="body1" style={{ fontFamily: "'Roboto Mono', monospace" }}>

        add a new pet

        </Typography>
      </Button>

    </div>
   
  );
}
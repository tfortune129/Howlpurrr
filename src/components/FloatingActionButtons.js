import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { padding } from '@mui/system';

export default function FloatingActionButtons() {
    return (

        <center>
                &nbsp;&nbsp;&nbsp;&nbsp;

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
               
            }}>
                {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
                <Fab variant="extended" sx={{mr: 2, background: 'green'}}>
                    today was a good day
                </Fab>
                <Fab variant="extended" sx={{background: 'red'}}>
                    today was a bad day
                </Fab>
                {/* <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab> */}
            </Box>
        </center>
    );
}

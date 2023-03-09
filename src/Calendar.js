import React, { Component } from 'react'
import ColorTextFields from './components/ColorTextFields'
import SubComponentsPickers from './components/SubComponentsPickers'
import Box from '@mui/material/Box';



export default class Calendar extends Component {
  render() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
           <SubComponentsPickers />
           
           <ColorTextFields /></Box>
            
 
    )
  }
}

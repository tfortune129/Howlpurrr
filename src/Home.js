import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar'
import yona from './images/yona.png'
import honeybee from './images/honeybee.png'

// import AvatarGroup from '@mui/material/AvatarGroup'



export default class Home extends Component {
  render() {
    return (
        <center>
          <Avatar
            alt="Yona"
            src={yona}
            sx={{ width: 400, height: 400 }}
            
           
          />

          <Avatar
            alt="Honeybee"
            src={honeybee}
            sx={{ width: 400, height: 400 }}
            
           
          />

     </center>

    )
  } 
}



 {/* <AvatarGroup sx={{ width: 400, height: 400 }}>
        <Avatar alt="Yona" src="/src/images/yona.png" />
        <Avatar alt="Honeybee" src="/src/images/honeybee.png" />
        
        </AvatarGroup> */}
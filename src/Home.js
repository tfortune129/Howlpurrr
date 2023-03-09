import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar'
import yona from './images/yona.png'
import honeybee from './images/honeybee.png'

// import AvatarGroup from '@mui/material/AvatarGroup'



export default class Home extends Component {
 
  
  handleAvatarClick = (avatarName) => {
    const message = `You clicked the ${avatarName} avatar!`;
    alert(message);
  };

  render() {

    return (
        <center>
            &nbsp;&nbsp;&nbsp;&nbsp;
          <a href='/pet'><Avatar
            alt="Yona"
            src={yona}
            sx={{ width: 400, height: 400 }}
            onClick={() => this.handleAvatarClick('Yona')}
            
           
          /> </a>
          
            &nbsp;&nbsp;&nbsp;
          <a href='/pet'><Avatar
            alt="Honeybee"
            src={honeybee}
            sx={{ width: 400, height: 400 }}
            onClick={() => this.handleAvatarClick('Honeybee')}
            
           
          /></a>

     </center>

    )
  } 
}



 {/* <AvatarGroup sx={{ width: 400, height: 400 }}>
        <Avatar alt="Yona" src="/src/images/yona.png" />
        <Avatar alt="Honeybee" src="/src/images/honeybee.png" />
        
        </AvatarGroup> */}
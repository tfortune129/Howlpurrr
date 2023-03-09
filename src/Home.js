import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar'
import yona from './images/yona.png'
import honeybee from './images/honeybee.png'
import Button from '@mui/material/Button';

// import AvatarGroup from '@mui/material/AvatarGroup'



export default class Home extends Component {
  state = {
    clickedAvatar: null
  };
 
  
  handleAvatarClick = (avatarName, event) => {
    event.preventDefault();
    this.setState({ clickedAvatar: avatarName })
  };

  render() {

    const { clickedAvatar } = this.state;

    return (
        <center>
            &nbsp;&nbsp;&nbsp;&nbsp;
          
          <a href='/pet' onClick={() => this.handleAvatarClick('Yona')}
 ><Avatar
          // add this after a tag to redirect to the pet page "href='/pet'"
            alt="Yona"
            src={yona}
            sx={{ width: 400, height: 400 }}
            
           
          /> </a>
          
            &nbsp;&nbsp;&nbsp;
          <a href='/pet' onClick={() => this.handleAvatarClick('Honeybee')}
><Avatar
            alt="Honeybee"
            src={honeybee}
            sx={{ width: 400, height: 400 }}
            
           
          /></a>

        {clickedAvatar && (
          <div>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>Disabled</Button>
            <Button variant="outlined" href="#outlined-buttons">Link</Button>
          </div>
        )}


     </center>

    )
  } 
}



 {/* <AvatarGroup sx={{ width: 400, height: 400 }}>
        <Avatar alt="Yona" src="/src/images/yona.png" />
        <Avatar alt="Honeybee" src="/src/images/honeybee.png" />
        
        </AvatarGroup> */}
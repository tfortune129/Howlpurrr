import React, { Component } from 'react'
import OutlinedButtons from './components/OutlinedButtons';

export default class Pet extends Component {
  render() {
    // function addPet() {
    //   const [hasPet, setHasPet] = useState(false);
    
    return (

        <OutlinedButtons user={this.props.user} />


    //     <div>
    //       <center>
    //         <a href='/pet'>
    //           <Avatar
    //             alt="Yona"
    //             src={yona}
    //             sx={{ width: 400, height: 400 }}
    //           />
    //         </a>
    //         <a href='/pet'>
    //           <Avatar
    //             alt="Honeybee"
    //             src={honeybee}
    //             sx={{ width: 400, height: 400 }}
    //           />
    //         </a>
    //       </center>
    // </div>
       
  
        
          

    
    )
  }
}
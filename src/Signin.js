import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function SignIn() {


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

 

//     const url = 'http://localhost:5000/api/signin'
//     const options = {
//         method: "POST",
//         headers: {
//             Authorization: `Basic ${btoa(username+':'+password)}`
//         }
//     }
  

//     const res = await fetch(url, options);
//     const data = await res.json();
//     console.log(data)
//     if (data.status == 'ok'){
//       console.log('Logged in')
//     }


// };   




  return (
  

    <center>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <h1>log in</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <form className="form-inline">
            
            <div className="form-group mx-sm-3 mb-2">
                <input type="email" className="form-control" placeholder="Email" style={{width: "300px"}} />
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input type="password" className="form-control" placeholder="Password" style={{width: "300px"}} />
            </div>
            &nbsp;&nbsp;&nbsp;
            <div>
            <button type="submit" className="btn btn-primary">Enter</button>
            
            <div className="form-check mx-auto">
                    {/* <Checkbox {...label} defaultChecked color="secondary" /> */}
                    <Checkbox 
                      sx={{
                      color: "white",
                      '&.Mui-checked': {
                      color: "gray",
                       },
                     }}/>

           
              <label className="form-check-label3" htmlFor="dropdownCheck"><i>remember us</i></label>
              <a className="dropdown-item" href="/signup" style={{color: 'white'}}>new to this? sign up!</a>
              <a className="dropdown-item" href="#" style={{color: 'white'}}>forgot password?</a>
           

              {/* figure out how to make forget password to work */}
            </div>
            
            </div>
            </form>
    </center>
  )
}

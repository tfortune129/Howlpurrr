import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     const confirmPassword = e.target.confirmPassword.value;

    //     const reqBody = {
    //         name: name,
    //         email: email,
    //         password: password

    //     }

    //     const url = 'http://localhost:5000/api/signup'
    //     const options = {
    //         method: "POST", **** is this not get request too? ****
    //         body: JSON.stringify(reqBody),
    //         headers: {
    //             "Content-Type": 'application/json'
    //         }
    //     };

    //     if (password!= confirmPassword) {
    //         console.log('Passwords do not match')
    //     }

    //     const res = await fetch(url, options);
    //     const data = await res.json();
    //     console.log(data)


    // };   




    return (
    
            <center>
                <h1>sign up</h1>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <form className="form-inline">
                {/*put this after inline" ^^ onSubmit={handleSubmit}> */}
                
                <div className="form-group mx-sm-3 mb-2">
                    <input type="name" className="form-control" placeholder="First Name" style={{width: "300px"}} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="name" className="form-control" placeholder="Last Name" style={{width: "300px"}} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <input type="email" className="form-control" placeholder="Email" style={{width: "300px"}} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="password" className="form-control" placeholder="Password" style={{width: "300px"}} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="password" className="form-control" placeholder="Confirm Password" style={{width: "300px"}} />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div>
                <button type="submit" className="btn btn-primary mb-2">Done</button>
                </div>
                </form>
        </center>
        
          )
        }
    } 
 

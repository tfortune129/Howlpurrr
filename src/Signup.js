import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const first_name = e.target.first_name.value;
        const last_name = e.target.last_name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm_password = e.target.confirm_password.value;

        const reqBody = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            confirm_password: confirm_password

        }

        console.log(reqBody);

        const url = 'http://127.0.0.1:5000/api/signup'
        const options = {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (password !== confirm_password) {
            return alert('passwords do not match')
        }


        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);
        if (res.status === 200) {
            navigate('/signin');
        }

    };

    return (

        <center>
            <h1>sign up</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <form className="form-inline" onSubmit={handleSubmit}>

                <div className="form-group mx-sm-3 mb-2">
                    <input name='first_name' type="name" className="form-control" placeholder="first name" style={{ width: "300px" }} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input name='last_name' type="name" className="form-control" placeholder="last name" style={{ width: "300px" }} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <input name='email' type="email" className="form-control" placeholder="email" style={{ width: "300px" }} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input name='password' type="password" className="form-control" placeholder="password" style={{ width: "300px" }} />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input name='confirm_password' type="password" className="form-control" placeholder="confirm password" style={{ width: "300px" }} />
                </div>
                &nbsp;&nbsp;&nbsp;
                <div>
                    <button type="submit" className="btn btn-primary mb-2">done</button>
                </div>
            </form>
        </center>



    )
}

import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Myprofile from './Myprofile'
import Nav from './Nav'
import Pet from './Pet'
import Signin from './Signin'
import Signup from './Signup'
import Calendar from './Calendar'
import './style.css'
import Addpet from './Addpet'
import { useState } from 'react'

export default function App() {

  const [user, setUser] = useState({});
  // const [issignedOut, setIsSignedOut] = useState(false);

  const signIn = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    setUser(user)
  }

 const signOut = () => {
    // console.log(user.length === 0 ? 'User logged out' : 'User did not log out');
    localStorage.removeItem('user')
    setUser({})
    // setIsSignedOut(true);
    console.log(user);
  }


useEffect(()=> {
  // store user in local storage:
  const userString = localStorage.getItem('user');
  if (userString) {
    const user = JSON.parse(userString);
    setUser(user);
  }
}, [])

  // let first_name = user.first_name;

  let first_name = '';
  if (user.length > 0) {
    first_name = user.first_name;
  } 

  return (
    

    <BrowserRouter>
      <div>

        <Nav user={user} signOut={signOut} first_name={first_name} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pet" element={<Pet user={user} />} />
          <Route path="/me" element={<Myprofile />} />
          <Route path="/signin" element={<Signin signIn={signIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/addpet" element={<Addpet />} />


        </Routes>

      </div>
    </BrowserRouter>



  )
}





import React from 'react'
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

  const [user, setUser] = useState([]);

  const signIn = (user) => {
    // localStorage.setItem('user', JSON.stringify(user))
    console.log(user)
    setUser(user)
  }



  // let first_name = user.first_name;

  let first_name = '';
  if (user.length > 0) {
    first_name = user.first_name;
  } else {
    console.log('User logged out successfully'); // add this line to log a message to the console
  }

  const signOut = () => {
    // console.log(user.length === 0 ? 'User logged out' : 'User did not log out');

    setUser({})
    console.log(user);
  }


  return (

    <BrowserRouter>
      <div>

        <Nav user={user} signOut={signOut} first_name={first_name} />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pet" element={<Pet />} />
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





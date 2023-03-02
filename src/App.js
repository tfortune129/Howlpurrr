import React, { Component } from 'react'
// import { Calendar } from 'react-native-calendars'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import Home from './Home'
import Myprofile from './Myprofile'
import Nav from './Nav'
import Pet from './Pet'
import Signin from './Signin'
import Signup from './Signup'
import Calendar from './Calendar'
import './style.css'
import Addpet from './Addpet'



export default class App extends Component {
  render() {
    return (
      

      <BrowserRouter>
      <div>

        <Nav></Nav>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/pet" element={<Pet />} />
          <Route path="/me" element={<Myprofile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/addpet" element={<Addpet />} />


        </Routes>

      </div>
      </BrowserRouter>  
    )
  }
}


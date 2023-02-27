import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from'react-router-dom'
import Home from './Home'
import Myprofile from './Myprofile'
import Nav from './Nav'
import Pet from './Pet'
import Signin from './Signin'
import Signup from './Signup'

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


        </Routes>

      </div>
      </BrowserRouter>  
    )
  }
}

import React, { Component } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
// import { faEllo } from '@fortawesome/free-solid-svg-icons'


export default class Nav extends Component {
  render() {
    return (
        <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-secondary p-4">
            <h4 className="text-white">welcome back!</h4>
            <span className="text-muted"></span>
            {/* make text muted names based on profile */}
            <div className="dropdown-divider mt-3"></div>
            <a className="dropdown-item text-white" href="/">home</a>
            <a className="dropdown-item text-white" href="/pet">pet profile</a>
            <a className="dropdown-item text-white" href="/me">my profile</a>
            <a className="dropdown-item text-white" href="/adopt">adopt</a>
            <a className="dropdown-item text-white" href="signin">sign in</a>
            <a className="dropdown-item text-white" href="signup">sign up</a>
            
          </div>
        </div>


        <nav className="navbar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            
            <a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p id='toggletext'>hey, click me? </p>
              {/* <FontAwesomeIcon icon={faEllo} /> */}
              <FontAwesomeIcon icon="fa-brands fa-ello" />
            </a>

          </button>
          
          <a className="navbar-brand" href="/">howlpurrr (helper)<FontAwesomeIcon icon={faPaw} className="ml-2"/></a>
      
          
        </nav>
      </div>
      
      
    )
  }
};

import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Nav extends Component {
  render() {
    return (
        <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">welcome back!</h4>
            <span className="text-muted"></span>
            {/* make text muted names based on profile */}
            <div className="dropdown-divider mt-3"></div>
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pet">pet profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/me">my profile</Link>
            </li> */}
            <a className="dropdown-item text-white" href="/">home</a>
            <a className="dropdown-item text-white" href="/pet">pet profile</a>
            <a className="dropdown-item text-white" href="/me">my profile</a>
            <a className="dropdown-item text-white" href="signin">sign in</a>
            <a className="dropdown-item text-white" href="signup">sign up</a>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         
        </nav>
      </div>
      
      
    )
  }
};

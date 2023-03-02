import React, { Component } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'




export default class Nav extends Component {
  state = {
    collapsed: true,

  };
  
  handleClick = () => {
     this.setState({collapsed: !this.state.collapsed});


  }

  render() {
    return (
        <div className="pos-f-t">
        <div className={this.state.collapsed?'collapse': 'collapse show'} id="navbarToggleExternalContent">  
          <div className="bg-secondary p-4" onClick={this.handleClick}>
            <h4 className="text-white">welcome back!</h4>
            <span className="text-muted"></span>
            {/* make text muted names based on profile */}
            <div className="dropdown-divider mt-3"></div>
            <Link className="dropdown-item text-white" to="/">home</Link>
            <Link className="dropdown-item text-white" to="/pet">pet profile</Link>
            <Link className="dropdown-item text-white" to="/calendar">calendar overview</Link>
            <Link className="dropdown-item text-white" to="/me">my profile</Link>
            <Link className="dropdown-item text-white" to="signin">sign in</Link>
            <Link className="dropdown-item text-white" to="signup">sign up</Link>
            
          </div>
        </div>


        <nav className="navbar">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            
            <a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <p id='toggletext'>hey, click me? </p>
              <FontAwesomeIcon icon="fa-brands fa-ello" />
            </a>

          </button>
          
          <a className="navbar-brand" href="/">howlpurrr (helper)<FontAwesomeIcon icon={faPaw} className="ml-2"/></a>
      
          
        </nav>
      </div>
      
      
    )
  }
};

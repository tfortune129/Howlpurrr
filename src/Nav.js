import React, { Component } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router';




export default class Nav extends Component {
  state = {
    collapsed: true,

  };
  
  handleClick = () => {
     this.setState({collapsed: !this.state.collapsed});


  }

  render() {
    if (this.state.signedOut) {
      return <Navigate to="/signin" />
    }

    const welcomeMessage = this.props.user.apitoken
    ? `welcome back, ${this.props.user.first_name}!`
    : 'welcome!';
    
    return (
        <div className="pos-f-t">
        <div className={this.state.collapsed?'collapse': 'collapse show'} id="navbarToggleExternalContent">  
          <div className="bg-secondary p-4" onClick={this.handleClick}>
            <h4 className="text-white">{welcomeMessage}</h4>
            <span className="text-muted"></span>
            {/* make text muted names based on profile */}
            <div className="dropdown-divider mt-3"></div>
            <Link className="dropdown-item text-white" to="/">home</Link>
            <Link className="dropdown-item text-white" to="/pet">my pet's day to day</Link>
            <Link className="dropdown-item text-white" to="/calendar">calendar overview</Link>
            <Link className="dropdown-item text-white" to="/me">my profile</Link>

            {
            this.props.user.apitoken
            ?
            <>
            <Link className="dropdown-item text-white" to="/signin" onClick={() => {this.props.signOut(); this.setState({ signedOut: true });}} >
              sign out
              </Link>
            {/* <p className='dropdown-item text-white'>hey there, {this.props.user.first_name}</p> */}
        
            </>
            :
            <>
            <Link className="dropdown-item text-white" to="/signin">sign in</Link>
            <Link className="dropdown-item text-white" to="/signup">sign up</Link>

            </>

            }

            
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


// replace signup button with logout button


// h4: welcome back, {this.props.user.first_name}!
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllo } from '@fortawesome/free-brands-svg-icons';
import { OutboxRounded } from '@mui/icons-material';
import OutlinedButtons from './components/OutlinedButtons';


export default class Myprofile extends Component {
  render() {

    // const welcomeMessage = this.props.user.apitoken
    // ? `welcome back, ${this.props.user.first_name}!`
    // : 'welcome!';

    return (

      <>
        <center>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <h1>you're back <FontAwesomeIcon icon={faEllo} style={{ color: 'white' }} />
          </h1>

          &nbsp;&nbsp;&nbsp;&nbsp;

        </center>
        <OutlinedButtons user={this.props.user} />
      </>

    )
  }
}

import React, { Component } from 'react';
import store from '../store/index';
import LoginForm from './login_form';

class LoggedIn extends Component{
  constructor(){
    super()
    this.state={
      loggedIn: store.getState().loggedIn,
    }
    store.subscribe(()=>{
      this.setState({
        loggedIn:store.getState().loggedIn,
      });
    });
  }
  render(){
    const { loggedIn } = this.state;
    return(
      <div>
         <h3>{loggedIn ? 'You are logged in.' : 'Failed to login.'}</h3>
      </div>
    )
  }
}

export default LoggedIn;
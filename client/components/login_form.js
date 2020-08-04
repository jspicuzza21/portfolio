import React, { Component } from 'react';
import axios from 'axios';
import store, { updateForm, setLoggedIn } from '../store/index';

class LoginForm extends Component{
  constructor() {
    super();

    const { username, password, loggedIn } = store.getState();

    this.state = {
      username,
      password,
      loggedIn,
    };

    store.subscribe(() => {
      const { username, password, loggedIn } = store.getState();

      this.setState({
        username,
        password,
        loggedIn,
      });
    });
  }

  componentDidMount() {
    const { history } = this.props;
    const { loggedIn } = this.state;

    if (loggedIn) {
      history.push('/account');
    }
  }

  componentDidUpdate() {
    const { history } = this.props;
    const { loggedIn } = this.state;

    if (loggedIn) {
      history.push('/account');
    }
  }

  onChange = ({target: {name, value}}) =>{
    store.dispatch(updateForm(name, value))
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const { username, password } = this.state;
    const { history } =this.props;

    axios.post('/api/login', {
      username,
      password
    })
    .then(({data})=>{
      store.dispatch(setLoggedIn())
    })
    .catch(e=>{
      console.log(e)
    })
    .finally(()=>{
      history.push('/account')
    })
  }

  render(){
    const { username, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Username:
          <input name='username' onChange={this.onChange} value={username}></input>
        </label>
        <label>
          Password
          <input name='password' type='password' onChange={this.onChange} value={password}></input>
        </label>
        <button>Login</button>
      </form>
    )
  }
}

export default LoginForm;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginThunk } from '../../store/thunks/loginThunks';

const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(props)

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password, history)
  };

  return (
    <form>
      <label>
        Username:
        <input value={username} type='username' onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <label>
        Password:
        <input value={password} type='password' onChange={(e) => setPassword(e.target.value)}></input>
      </label>
      <button  onClick={handleSubmit} type='submit'> Login </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (username, password, history) => dispatch(loginThunk(username, password, history)),
});

export default connect(null, mapDispatchToProps)(Login);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginThunk } from '../../store/thunks/loginThunks';

const Login = (props) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.login(email, password, history);
  };
  return (
    <div className='flex-container'>
      <form className='box login' style={{marginTop:'100px'}}>
        <div className='scpoLogo'></div>
        <label className='label'>
          Username:
          <input value={email} type='username' onChange={(e) => setUsername(e.target.value)} className='input'></input>
        </label>
        <label className='label'>
          Password:
          <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} className='input'></input>
        </label>
        <button  onClick={handleSubmit} type='submit' className='button is-primary'> Login </button>
      {
        props.user.failedLogin &&
        <h1 style={{color:'red'}}>Incorrect username or password</h1>
      }
      </form>
    </div>
  );
};

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  login: (username, password, history) => dispatch(loginThunk(username, password, history)),
});

export default connect(mapStateToProps,  mapDispatchToProps)(Login);
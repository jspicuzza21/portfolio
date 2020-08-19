import React from 'react';
import { connect } from 'react-redux';
import { logoutThunk } from '../../store/thunks/loginThunks';

const Logout = ({ user, logout }) => (
  <div className='flex-container'>
    <div className='box login ' style={{marginTop:'100px'}}>
      <h2 style={{fontSize:'1.5rem', textAlign:'center'}}>
        {`Welcome ${user.email}!`}
      </h2>
      <button
        onClick={logout}
        className='button is-danger'
        style={{width:'100px'}}
      >
        Logout
      </button>
    </div>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
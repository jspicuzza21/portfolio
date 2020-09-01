import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  if(props.user.role==='member'||props.user.role==='admin'){
  return (
    <div className='top-container' style={{height:'100vh'}}>
      <div className='box profile'>
        <h1 style={{fontSize:'2.3rem'}}>Name: {props.user.name}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Email: {props.user.email}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Department: {props.user.department}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Cellphone: {props.user.cellphone}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Work Phone: {props.user.workPhone}</h1>
        <div style={{alignSelf:'center'}}>
          <button onClick={()=> window.location.hash='/edit-profile'} className='button is-info' style={{width:'150px'}}>Edit Profile</button>
          <button onClick={()=> window.location.hash='/change-password'} className='button is-danger' style={{width:'150px'}}>Change Password</button>
        </div>
      </div>
    </div>
  )
  } else {
    return <h1 style={{color:'white', textAlign:'center', marginTop:'200px'}}>Unathorized</h1>
  }
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
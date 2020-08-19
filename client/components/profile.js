import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  console.log(props)

  return (
    <div>
      <div className='box'>
        <h1 style={{fontSize:'2.3rem'}}>Name: {props.user.name}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Email: {props.user.email}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Department: {props.user.department}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Cellphone: {props.user.cellphone}</h1>
        <h1 style={{fontSize:'1.4rem'}}>Work Phone: {props.user.workPhone}</h1>
        <Link to ='/change-password'>Change Password</Link>
      </div>
    </div>
  )

}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
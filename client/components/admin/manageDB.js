import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ManageDB = ()=>{


  return (  
    <div className='page-container'>
      <div className='box page-container' style={{width:'40%'}}>
        <Link to='/admin/manage-requests' style={{fontSize:'1.8rem'}}>Manage Requests</Link>
        <Link to='/admin/manage-devices' style={{fontSize:'1.8rem'}}>Manage Devices</Link>
      </div>
    </div>
  )
}

export default ManageDB;
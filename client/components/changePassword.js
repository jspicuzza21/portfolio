import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

const ChangePassword = (props) =>{
  
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [access, setAccess] = useState(false);
  const [failedAttempt, setFailedAttempt] = useState(false);

  if(props.user.role==='member'||props.user.role==='admin'){
  return (
    <div className='page-container' style={{height:'100vh'}}>
      <div className='top-container' style={{height:'100vh'}}> 
        <div className='box'>
          {!access &&
          <div>
            <label className='label'>
              Old Password:
              <input className='input' type='password' value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}></input>
            </label>
              <button className='button' onClick={async ()=>{
                const { id } =  props.user;
                await axios.post(`api/users/verify/${id}`, {oldPassword })
                .then(async ({data})=> {  
                  setAccess(data)
                  if(data){
                    setOldPassword('')
                    setFailedAttempt(false)
                  } else {
                    setFailedAttempt(true)
                  }
                })

              }}>Submit</button> 
            </div>
          }

            {failedAttempt &&
              <h1>Incorrect Password</h1>
            }
            { access &&
            <div style={{display:'flex', flexDirection:'column', alignItems:"center", justifyContent:'center'}}>
                <label className='label' style={{width:'100%'}}>
                New Password:
                  <input className='input' type='password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
                </label>
                <label className='label' style={{width:'100%'}}>
                Confirm Password:
                  <input className='input' type='password' value={newPassword2} onChange={(e)=>setNewPassword2(e.target.value)}></input>
                </label>
              <button className='button' onClick={()=>{
                if(newPassword===newPassword2){
                  axios.put(`/api/users/pw/${props.user.id}`, {newPassword})
                    .then(()=> console.log('password reset success'))
                    .catch(e=> console.log(e))
                } else {
                  alert('Passwords do not match')
                }
                }}
              >Submit</button>
            </div>
            }
        </div>

      </div>
    </div>
  )
  }else {
    return <h1 style={{color:'white', textAlign:'center', marginTop:'200px'}}>Unathorized</h1>
  }
}


const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

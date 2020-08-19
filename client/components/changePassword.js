import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

const ChangePassword = (props) =>{
  
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [access, setAccess] = useState(false);
  const [failedAttempt, setFailedAttempt] = useState(false);

  return (
    <div>
      <div className='box'>
        {!access &&
        <div>
          <label>
            Old Password:
            <input value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}></input>
          </label>
            <button onClick={async ()=>{
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
          <div>
              <label>
              New Password:
              <input value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}></input>
            </label>
              <label>
              Confirm New Password:
              <input value={newPassword2} onChange={(e)=>setNewPassword2(e.target.value)}></input>
            </label>
            <button onClick={()=>{
              axios.put(`/api/users/pw/${props.user.id}`, {newPassword})
              .then(()=> console.log('password reset success'))
              .catch(e=> console.log(e))
            }}>Submit</button>
          </div>
          }
      </div>
    </div>
  )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

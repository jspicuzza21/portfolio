import React, {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

const EditProfile = (props)=>{

  const [name, setName] = useState(props.user.name);
  const [department, setDepartment] = useState(props.user.department);
  const [cellphone, setCellPhone] = useState(props.user.cellphone);
  const [workPhone, setWorkPhone] = useState(props.user.workPhone);


  console.log(props)

  const handleSubmit=()=>{
    const obj={
      name, department, cellphone, workPhone
    }
    axios.put(`/api/users/${props.user.id}`, obj)
    .then(props.history.push('/profile'))
  }

  return (
    <div style={{height:'100vh'}}>
      <div className='top-container' style={{height:'100vh'}}>
        <div className='box'>
          <label className='label'>
            Name:
            <input value={name} name='name' onChange={(e)=> setName(e.target.value)} className='input'/>
          </label>
          <label className='label'>
            Department:
            <input value={department} name='department' onChange={(e)=> setDepartment(e.target.value)} className='input'/>
          </label>
          <label className='label'>
            Cellphone:
            <input value={cellphone} name='name' onChange={(e)=> setCellPhone(e.target.value)} className='input'/>
          </label>
          <label className='label'>
            Work Phone:
            <input value={workPhone} name='workphone' onChange={(e)=> setWorkPhone(e.target.value)} className='input'/>
          </label>
          <button className='button is-primary' onClick={()=>handleSubmit()}>Save</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
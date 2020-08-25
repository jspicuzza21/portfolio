import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getFilteredDevicesThunk, getDevicesThunk, deleteDeviceThunk } from '../../store/thunks/adminThunks';
import { Link } from 'react-router-dom';

const DeviceStats = (props) => {
  
  const [filter, setFilter] = useState('');
  const [val, setVal] = useState('');

  useEffect(() => {
    props.getDevices()
  }, []);
  
  const handleInput=(e)=>{
    setFilter(e.target.value)
  }

  const handleValInput=(e)=>{
    setVal(e.target.value)
  }

  const handleSubmit=()=>{
    props.getFilteredDevices(filter, val)
  }

  const handleResetSubmit=()=>{
    props.getDevices()
  }

  const inputTypes=['make', 'model'];
  return(
    <div className='page-container' style={{backgroundColor:'#02001f',width: '100vw', height:'100vh'}}>
      <div className='box'>
        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
          <label className='label'>
            Filter By:
            <div className='select is-small' style={{margin:'5px'}}>
              <select value={filter} onChange={handleInput}>
                <option>---select--</option>
                <option value='devType'>Type</option>
                <option value='make'>Make</option>
                <option value='model'>Model</option>
                <option value='authority'>Legal Authority</option>
              </select>
            </div>
          </label>

          { inputTypes.includes(filter) &&
            <input value={val} onChange={handleValInput} className='input' style={{width:'40%',margin:'5px'}}></input>
          }
          { filter==='devType' &&
          <div className='select is-small'>
            <select value={val} onChange={handleValInput}>
              <option>--select--</option>
              <option>Desktop</option>
              <option>DVR</option>
              <option>External Drive</option>
              <option>Laptop</option>
              <option>Loose Drive</option>
              <option>Mobile Device</option>
              <option>Memory Card</option>
              <option>USB Thumb Drive</option>
              <option>Other</option>
            </select>
          </div>
          }
          { filter==='authority' &&
          <div className='select is-small'>
            <select value={val} onChange={handleValInput}>
              <option>--select--</option>
              <option>Search Warrant</option>
              <option>Consent</option>
              <option>Found Property</option>
              <option>Other</option>
            </select>
          </div>
          }
        </div>
        <div>
          <button onClick={()=>handleSubmit()} className='button is-info'>Filter</button>
          <button onClick={()=>handleResetSubmit()} className='button is-danger'>Reset</button>
        </div>
      </div>
      <div className='box'>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <th>Modified Date</th>
              <th>Type</th>
              <th>Make</th>
              <th>Model</th>
              <th>Serial</th>
              <th>Password</th>
              <th>Legal Authority</th>
              <th>Evidence #</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {props.admin.allDevs &&
              props.admin.allDevs.map(dev=>{
                return (
                  <tr key={dev.id}>
                  <td>{new Date (dev.updatedAt).toDateString()}</td>
                  <td>{dev.devType}</td>
                  <td>{dev.make}</td>
                  <td>{dev.model}</td>
                  <td>{dev.serial}</td>
                  <td>{dev.pin}</td>
                  <td>{dev.authority}</td>
                  <td>{dev.evidenceNum}</td>
                  <td>{dev.notes}</td>
                  <td><button onClick={()=> props.deleteDevice(dev.id)} className='button is-danger is-small'>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  // getRequests: () => dispatch(getRequestsThunk()),
  getFilteredDevices:(property, filter)=>dispatch(getFilteredDevicesThunk(property, filter)),
  getDevices:(property, filter)=>dispatch(getDevicesThunk(property, filter)),
  deleteDevice: (id) => dispatch(deleteDeviceThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceStats);
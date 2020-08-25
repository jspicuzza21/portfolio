import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSingleRequestThunk, updateRequestStatusThunk } from '../../store/thunks/adminThunks';
import { Flex } from '@chakra-ui/core';

const SingleRequest = (props) => {

  const [status, setStatus] = useState('');
  
  useEffect(() => {
    props.getSingleRequest(props.match.params.id)
  }, []);

  const handleInput= async(e) =>{
    await setStatus(e.target.value)
  }
  
  const handleSubmit=()=>{
    console.log(status)
    props.updateStatus(props.match.params.id, status)
    props.history.push('/admin/new-requests')
  }
  
  const req = props.admin.singleReq[0]
  return(
    <div className='page-container' style={{backgroundColor:'#02001f',width: '100vw', height:'100vh'}}>
      <div className='box' style={{width:'70%'}}>
        <h1>Case Information</h1>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <th>Case Number</th>
              <th>Crime</th>
              <th>Suspect</th>
              <th>Service</th>
              <th>Assistant Prosecutor</th>
              <th>Status</th>
              <th>Urgency</th>
            </tr>
          </thead>
          <tbody>
          {req &&
            <tr>
              <td>{req.caseNumber}</td>
              <td>{req.crime}</td>
              <td>{req.suspect}</td>
              <td>{req.service}</td>
              <td>{req.aP}</td>
              <td>{req.status}</td>
              <td>{req.urgency}</td>
            </tr>
          }
          </tbody>
        </table>
        </div>
        <div className='box' style={{width:'70%'}}>
          <h1>Devices</h1>
          <table className='table'>
            <thead>
              <tr>
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
            {req &&
              req.devices.map(dev=>{
                return(
                  <tr key={dev.id}>
                    <td>{dev.devType}</td>
                    <td>{dev.make}</td>
                    <td>{dev.model}</td>
                    <td>{dev.serial}</td>
                    <td>{dev.pin}</td>
                    <td>{dev.authority}</td>
                    <td>{dev.evidenceNum}</td>
                    <td>{dev.notes}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>
          <div style={{textAlign:'center', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <div>
              <label className='label'>
                Update Status:
              <div className='select is-small'>
                <select value={status} onChange={handleInput}>
                  <option>-- Select --</option>
                  <option>Incomplete</option>
                  <option>Submitted</option>
                  <option>In Progress</option>
                  <option>Complete</option>
                </select>
              </div>
              </label>
            </div>
            <button onClick={handleSubmit} className='button is-primary' style={{width:'90px'}}>Save</button>
          </div>
        </div>
      </div>
  )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  getSingleRequest: (id) => dispatch(getSingleRequestThunk(id)),
  updateStatus:(id, history) => dispatch(updateRequestStatusThunk(id, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleRequest);
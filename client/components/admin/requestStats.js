import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRequestsThunk, getFilteredRequestsThunk} from '../../store/thunks/adminThunks';
import { Link } from 'react-router-dom';

const RequestStats = (props) => {
  
  const [filter, setFilter] = useState('');
  const [val, setVal] = useState('');

  useEffect(() => {
    props.getRequests()
  }, []);

  console.log(props)
  
  const handleInput=(e)=>{
    setFilter(e.target.value)
  }

  const handleValInput=(e)=>{
    setVal(e.target.value)
  }

  const handleSubmit=()=>{
    props.getFilteredRequests(filter, val)
  }

  const handleResetSubmit=()=>{
    props.getRequests()
  }

  const inputTypes=['caseNumber', 'aP', 'suspect'];
  const dateInputs=['createdAt', 'updatedAt']
  return(
    <div>
      <div className='box' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'60%', margin:'auto', marginTop:'15px', marginBottom:'20px' }}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
          <label className='label'>
            Filter By:
            <div className='select is-small' style={{margin:'5px'}}>
              <select value={filter} onChange={handleInput}>
                <option>---select--</option>
                <option value='createdAt'>Created Date</option>
                <option value='updatedAt'>Updated Date</option>
                <option value='caseNumber'>Case Number</option>
                <option value='service'>Service</option>
                <option value='aP'>Assistant Prosecutor</option>
                <option value='suspect'>Suspect</option>
                <option value='status'>Status</option>
                <option value='urgency'>Urgency</option>
              </select>
            </div>
          </label>
          { inputTypes.includes(filter) &&
            <input value={val} onChange={handleValInput} className='input' style={{width:'40%',margin:'5px'}}></input>
          }
          { filter==='service' &&
            <div className='select is-small'>
              <select value={val} onChange={handleValInput}>
                <option>-- Select ---</option>
                <option>Cellphone Extraction</option>
                <option>Forensic Exam</option>
                <option>Imaging</option>
                <option>DVR Extraction</option>
              </select>
            </div>
          }
          { filter==='urgency' &&
          <div className='select is-small'>
            <select value={val} onChange={handleValInput}>
              <option>--select--</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          }
          { filter==='status' &&
            <div className='select is-small'>
              <select value={val} onChange={handleValInput}>
                <option>--select--</option>
                <option>Incomplete</option>
                <option>Pending</option>
                <option>Submitted</option>
                <option>In Progress</option>
                <option>Complete</option>
              </select>
            </div>
          }
        </div>
        <div>
          <button onClick={()=>handleSubmit()} className='button is-info'>Filter</button>
          <button onClick={()=>handleResetSubmit()} className='button is-danger'>Reset</button>
        </div>
      </div>  
      <div className='box table-box'>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <th>Created Date</th>
              <th>Updated Date</th>
              <th>Submitter</th>
              <th>Department</th>
              <th>Case Number</th>
              <th>Service</th>
              <th>Assistant Prosecutor</th>
              <th>Suspect</th>
              <th>Status</th>
              <th>Urgency</th>
              <th>Devices</th>
            </tr>
          </thead>
          <tbody>
            {props.admin.allReqs &&
              props.admin.allReqs.map(req=>{
                return (
                  <tr key={req.id}>
                  <td>{new Date(req.createdAt).toDateString().slice(4)}</td>
                  <td>{new Date(req.updatedAt).toDateString().slice(4)}</td>
                  <td>{req.user.name}</td>
                  <td>{req.user.department}</td>
                  <td>{req.caseNumber}</td>
                  <td>{req.service}</td>
                  <td>{req.aP}</td>
                  <td>{req.suspect}</td>
                  <td>{req.status}</td>
                  <td>{req.urgency}</td>
                  <td>{req.devices.length}</td>
                  <td><Link to={`/admin/view-request/${req.id}`}> View</Link></td>
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
  getRequests: () => dispatch(getRequestsThunk()),
  getFilteredRequests:(property, filter)=>dispatch(getFilteredRequestsThunk(property, filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestStats);
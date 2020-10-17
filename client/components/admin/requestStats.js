import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRequestsThunk, getFilteredRequestsThunk, adminDeleteRequestThunk} from '../../store/thunks/adminThunks';
import { Link } from 'react-router-dom';

const RequestStats = (props) => {
  
  const [filter, setFilter] = useState('');
  const [val, setVal] = useState('');
  const [month, setMonth] = useState('Jan')
  const [year, setYear] = useState('2020')

  useEffect(() => {
    props.getRequests()
  }, []);
  
  const handleInput=(e)=>{
    setFilter(e.target.value)
  }

  const handleValInput=(e)=>{
    setVal(e.target.value)
  }

  const handleSubmit=()=>{
    if (val!==''){
      props.getFilteredRequests(filter, val)
    } else {
      props.getFilteredRequests(filter, `${month} ${year}`)
    }
  }

  const handleResetSubmit=()=>{
    props.getRequests()
  }


  const inputTypes=['caseNumber', 'aP', 'suspect', 'assignment'];
  const dateInputs=['createdAt', 'updatedAt'];
  const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const years = ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']
  return(
    <div className='page-container' style={{backgroundColor:'#02001f',width: '100vw', height:'100vh', padding:'20px'}}>
      <div className='box filter-box'>
        <div style={{display:'flex', alignItems:'center'}}>
          <label className='label' style={{margin:0}}>
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
                <option value='assignment'>Assignment</option>
              </select>
            </div>
          </label>
          {
            dateInputs.includes(filter)&&
            <div>
              <label className='label'>
                Month:
                <div className='select is-small'>
                  <select style={{marginRight:'5px'}} value={month} onChange={(e)=> {
                    setMonth(e.target.value) 
                  }}>
                    <option>-- Select ---</option>
                    {months.map(month=> <option key={month}>{month}</option>)}
                  </select>
                </div>
              </label>
              <label className='label'>
                Year:
                <div className='select is-small'>
                  <select value={year} onChange={(e)=>{
                    setYear(e.target.value)
                  }}>
                    <option>-- Select ---</option>
                    {years.map(year => <option key={year}>{year}</option>)}
                  </select>
                </div>
              </label>
            </div>
          }
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
      <div className='box'>
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
              <th>Assignment</th>
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
                  <td>{req.assignment}</td>
                  <td>{req.devices.length}</td>
                  <td><Link to={`/admin/view-request/${req.id}`}> View</Link></td>
                  <td><button onClick={()=> props.deleteRequest(req.id)} className='button is-danger is-small'>Delete</button></td>
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
  deleteRequest: (id) => dispatch(adminDeleteRequestThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestStats);
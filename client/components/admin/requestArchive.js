import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRequestsThunk } from '../../store/thunks/adminThunks';
import { Link } from 'react-router-dom';

const RequestArchive = (props) => {
  
  useEffect(() => {
    props.getRequests()
  }, []);
  
  let newRequests;
  if(props.admin.allReqs[0]){
    newRequests=props.admin.allReqs.filter(req => req.status==='Complete')
  }
  
  return(
    <div style={{backgroundColor:'#242424', height:'100vh',padding:'10px'}}>
      <div className='box table-box'>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <th>Created Date</th>
              <th>Submitted By</th>
              <th>Department</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Case Number</th>
              <th>Urgency</th>
              <th>Number of Devices</th>
            </tr>
          </thead>
          <tbody>
          {newRequests &&
            newRequests.map(req=>{
              return (
                <tr key={req.id}>
                  <td>{new Date(req.createdAt).toDateString()}</td>
                  <td>{req.user.name}</td>
                  <td>{req.user.department}</td>
                  <td>{req.user.workPhone}</td>
                  <td>{req.user.email}</td>
                  <td>{req.caseNumber}</td>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestArchive);
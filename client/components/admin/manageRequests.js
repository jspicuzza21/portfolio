import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRequestsThunk, getFilteredRequestsThunk} from '../../store/thunks/adminThunks';
import { Link } from 'react-router-dom';
import { adminDeleteRequestThunk } from '../../store/thunks/adminThunks';

const ManageRequests = (props) => {
  useEffect(() => {
    props.getRequests()
  }, []);

  console.log(props)
  
  const handleInput=(e)=>{
    setFilter(e.target.value)
  }

  const handleSubmit=()=>{
    props.getFilteredRequests(filter, val)
  }

  return(
    <div>
      <div className='box table-box'>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <th>Created Date</th>
              <th>Updated Date</th>
              <th>Case Number</th>
              <th>Service</th>
              <th>Assistant Prosecutor</th>
              <th>Suspect</th>
              <th>Status</th>
              <th>Urgency</th>
              <th>Number of Devices</th>
            </tr>
          </thead>
          <tbody>
            {props.admin.allReqs &&
              props.admin.allReqs.map(req=>{
                return (
                  <tr key={req.id}>
                  <td>{new Date(req.createdAt).toDateString().slice(4)}</td>
                  <td>{new Date(req.updatedAt).toDateString().slice(4)}</td>
                  <td>{req.caseNumber}</td>
                  <td>{req.service}</td>
                  <td>{req.aP}</td>
                  <td>{req.suspect}</td>
                  <td>{req.status}</td>
                  <td>{req.urgency}</td>
                  <td>{req.devices.length}</td>
                  <td><Link to={`/admin/view-request/${req.id}`}> View</Link></td>
                  <td><button onClick={()=>props.adminDeleteRequest(req.id)}>Delete</button></td>
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
  adminDeleteRequest: (id)=> dispatch(adminDeleteRequestThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageRequests);
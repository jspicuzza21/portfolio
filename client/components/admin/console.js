import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRequestsThunk } from '../../store/thunks/adminThunks';
import { Link } from 'react-router-dom';
// import alert from '../../assets/images/alert.png';

const AdminConsole = (props) => {
  
  useEffect(() => {
    props.getRequests()
  }, []);

  let newRequests;
  if(props.admin.allReqs[0]){
    newRequests=props.admin.allReqs.filter(req => req.status==='Submitted')
  }
  return(
    <div style={{backgroundColor:'#242424',width: '100vw'}}>
      {newRequests &&
      <div className='container admin-container' style={{backgroundColor:'#242424'}}>
        <div className='box admin-box' onClick={()=>props.history.push('/admin/new-requests')}>
          <h1 style={{fontSize:'1.1rem'}}>You have <span style={{color:'red'}}>{newRequests.length}</span> new requests.</h1>
          <div className='admin-image alert'>
            {/* <img src={alert}></img> */}
          </div>
          <h3 style={{fontSize: '1.5rem'}}>New Requests</h3>
        </div>
        <div className='admin-box box' onClick={()=>props.history.push('/admin/archive')}>
          <div className='admin-image archive'></div>
          <h3 style={{fontSize: '1.5rem'}}>Archive</h3>
        </div>
        <div className='box admin-box' onClick={()=>props.history.push('/admin/analytics')}>
          <div className='admin-image stats'></div>
          <h2 style={{fontSize: '1.5rem'}}>Statistics</h2>
        </div>
        <div className='box admin-box' onClick={()=>props.history.push('/admin/users')}>
          <div className=' admin-image users'></div>
          <h3 style={{fontSize: '1.5rem'}}>Manage Users</h3>
        </div>
      </div>
      }
    </div>
  )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  getRequests: () => dispatch(getRequestsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminConsole);
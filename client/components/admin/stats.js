import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRequestsThunk } from '../../store/thunks/adminThunks';
import { Link } from 'react-router-dom';
import ConsoleWidgets from './consoleWidgets'

const Stats = (props) => {

  return(
    <div >
      <ConsoleWidgets/>
      <div style={{display:'flex', justifyContent:'space-around'}}>
        <div className='box' style={{height:'4.2rem'}}><Link to='/admin/stats/requests' style={{fontSize:'1.2rem'}}>Filter Requests</Link></div>
        <div className='box' style={{height:'4.2rem'}}><Link to='/admin/stats/devices' style={{fontSize:'1.2rem'}}>Filter Devices</Link></div>
      </div>
    </div>
  )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  getRequests: () => dispatch(getRequestsThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
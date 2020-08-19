import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDevicesThunk } from '../../store/thunks/adminThunks';
import { convertTimeStampToMonth, convertTimeStampToYear, calculate } from '../../../server/utils';


const ConsoleWidgets = (props) => {
  
  useEffect(() => {
    props.getDevices()
  }, []);

  console.log(props)
  return(
    <div className='widget-container'>
      <div className='box widget'>
        <h1 style={{fontSize:'1.5rem'}}>Search Warrants</h1>
        <div className='inner-widget'>
          <h1> This Year</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'authority', 'Search Warrant', 'year')}</h2>
          <h1> This Month</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'authority', 'Search Warrant', 'month')}</h2>
        </div> 
      </div>
      <div className='box widget'>
        <h1 style={{fontSize:'1.5rem'}}>Consent</h1>
        <div className='inner-widget'>
          <h1> This Year</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs,'authority', 'Consent', 'year')}</h2>
          <h1> This Month</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'authority', 'Consent', 'month')}</h2>
        </div>
      </div>
      <div className='box widget'>
        <h1 style={{fontSize:'1.5rem'}}>Mobile Device Extractions</h1>
        <div className='inner-widget'>
          <h1> This Year</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'devType', 'Mobile Device', 'year')}</h2>
          <h1> This Month</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'devType', 'Mobile Device', 'month')}</h2>
        </div>
      </div>
      <div className='box widget'>
        <h1 style={{fontSize:'1.5rem'}}>Laptops</h1>
        <div className='inner-widget'>
          <h1> This Year</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'devType', 'Laptop', 'year')}</h2>
          <h1> This Month</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'devType', 'Laptop', 'month')}</h2>
        </div>
      </div>
      <div className='box widget'>
        <h1 style={{fontSize:'1.5rem'}}>DVR Examinations</h1>
        <div className='inner-widget'>
          <h1> This Year</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'devType', 'DVR', 'year')}</h2>
          <h1> This Month</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'devType', 'DVR', 'month')}</h2>
        </div>
      </div>
      <div className='box widget'>
        <h1 style={{fontSize:'1.5rem'}}>Total Devices</h1>
        <div className='inner-widget'>
          <h1> This Year</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'other', null, 'year')}</h2>
          <h1> This Month</h1>
            <h2 style={{fontSize:'2rem'}}>{calculate(props.admin.allDevs, 'other', null, 'month')}</h2>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  getDevices: () => dispatch(getDevicesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleWidgets);
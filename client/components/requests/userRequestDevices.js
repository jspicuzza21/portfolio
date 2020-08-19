import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceForm } from '../index';
import { getRequestsDevicesThunk, deleteDeviceThunk, submitRequestThunk } from '../../store/thunks/requestThunks';


class UserRequestDevices extends Component{

  async componentDidMount(){
    await this.props.getDevices(this.props.match.params.id)
  }
  
  render(){
    const { devices, history } = this.props;
    return(
      <div style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
        <DeviceForm/>
        <div className='box table-box'>
          <h1 className='subtitle'>Devices in Request</h1>
          <table className='table is-striped is-hoverable'>
            <thead>
              <tr>
                <th>Device Type</th>
                <th>Make</th>
                <th>Model</th>
                <th>Serial Number</th>
                <th>Pin</th>
                <th>Authority</th>
                <th>Agency Evidence #</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {devices.length>0 &&
                devices.map(dev=>{
                  return (
                    <tr key={dev.id}>
                      <td>{dev.devType}</td>
                      <td>{dev.make}</td>
                      <td>{dev.model}</td>
                      <td>{dev.serial}</td>
                      <td>{dev.pin}</td>
                      <td>{dev.authority}</td>
                      <td>{dev.evidenceNum}</td>
                      <td>{dev.notes}</td>
                      <td>
                      <button className='button is-info is-outlined is-small'>Edit</button>
                      </td>
                      <td>
                      <button className='button is-danger is-outlined is-small' onClick={()=>this.props.deleteDevice(dev.id)}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>
        <button className='button is-primary' onClick={()=>{
          this.props.submitRequest(this.props.match.params.id, history)
          }} style={{width: '110px'}}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = ({ devices }) => ({ devices });
const mapDispatchToProps = (dispatch) => ({
  getDevices: (id) => dispatch(getRequestsDevicesThunk(id)),
  deleteDevice:(id) => dispatch(deleteDeviceThunk(id)),
  submitRequest: (id, history) => dispatch(submitRequestThunk(id, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRequestDevices)
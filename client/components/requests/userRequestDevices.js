import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceForm } from '../index';
import { getRequestsDevicesThunk, deleteDeviceThunk, submitRequestThunk } from '../../store/thunks/requestThunks';


class UserRequestDevices extends Component{
  constructor(){
    super()
    this.state={
      selectedFile:null,
      fileUploaded:false
    }
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
  }

  
  async componentDidMount(){
    await this.props.getDevices(this.props.match.params.id)
  }

  onFileChange = event => { 
    this.setState({ selectedFile: event.target.files[0] }); 
  };

  onFileUpload = () => { 
    // Create an object of formData 
    const formData = new FormData(); 
    // Update the formData object 
    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    ); 
    // Details of the uploaded file 
    console.log(this.state.selectedFile); 
    // Request made to the backend api 
    // Send formData object 
    // axios.post("api/uploadfile", formData); 
  }; 
  
  render(){
    console.log(this.state)
    const { devices, history } = this.props;
    return(
      <div className='page-container'>
        <div style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
          <DeviceForm/>
          <div className='table-container'>
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
          
          <h1>Please upload a PDF of the legal process for all devices in one file.</h1>
          <div className="file has-name is-fullwidth">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" onChange={this.onFileChange}/>
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
              <span className="file-name">
                {this.state.selectedFile? this.state.selectedFile.name : 'No file uploaded'}
              </span>
            </label>
            <button onClick={this.onFileUpload} className='button'> Upload </button>
          </div>

          <button className='button is-primary' onClick={()=>{
            this.props.submitRequest(this.props.match.params.id, history)
            }} style={{width: '110px'}}>Submit</button>
        </div>

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
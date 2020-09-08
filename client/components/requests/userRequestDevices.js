import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceForm } from '../index';
import { getRequestsDevicesThunk, deleteDeviceThunk, submitRequestThunk } from '../../store/thunks/requestThunks';
import axios from 'axios';
import {downloadBlob} from '../../../server/utils/index';
import storageRef from '../../../server/firebase';


class UserRequestDevices extends Component{
  constructor(){
    super()
    this.state={
      selectedFile:null,
      fileUploaded:false,
      uploadedFiles:[]
    }
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.fileDownload = this.fileDownload.bind(this);
  }
  
  
  async componentDidMount(){
    await this.props.getDevices(this.props.match.params.id)
  }
  
  onFileChange = event => { 
    this.setState({ selectedFile: event.target.files[0] }); 
  };
  
  onFileUpload = async () => { 
    try{
      const docsRef = storageRef.child(this.state.selectedFile.name);
      docsRef.put(this.state.selectedFile)
      .then((snapshot)=> {
        console.log('Uploaded a blob or file!');
        console.log(this)
        this.setState({uploadedFiles: [...this.state.uploadedFiles, this.state.selectedFile.name]})
        this.setState({selectedFile: null})
      });
    }catch(e){
      console.log('failed to upload')
      console.log(e)
    }
  }; 
  
  fileDownload = async() =>{
  }
  
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
          
          <h1>Please upload the legal process for all devices in PDF format.</h1>
          <div className="file has-name is-fullwidth" style={{alignItems:'center'}}>
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

          {this.state.uploadedFiles.length>0 &&
          <div style={{color:'green'}}>
            <h2>Files uploaded Successfully</h2>
            <ol>
              {this.state.uploadedFiles.map(file=> <li key={file}>{file}</li>)}
            </ol>
          </div>
          }

          <button className='button is-primary' onClick={()=>{
            this.props.submitRequest(this.props.match.params.id, history)
            }} style={{width: '130px'}}>Submit Request</button>
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
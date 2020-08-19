import React, {useState, Component } from 'react';
import { connect } from 'react-redux';
import { addDeviceThunk } from '../../store/thunks/requestThunks';
import { useToast } from "@chakra-ui/core";

  const DeviceForm =(props)=>{
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [serial, setSerial] = useState('');
  const [authority, setAuthority] = useState('');
  const [notes, setNotes] = useState('');
  const [pin, setPin] = useState('');
  const [devType, setDevType] = useState('');
  const [evidenceNum, setEvidenceNum] = useState('');
  const requestId = window.location.hash.slice(14);
  const toast = useToast();
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    const newDev={
      make,
      model,
      serial,
      authority,
      notes,
      pin,
      requestId,
      devType,
      evidenceNum,
    }
    toast({
      title: "Device Added.",
      description: "You've added a device to this request.",
      status: "success",
      duration: 9000,
      isClosable: true,
    })

    props.addDevice(newDev)
    setMake('')
    setModel('')
    setNotes('')
    setPin('')
    setSerial('')
    setAuthority('')
    setDevType('')
    setEvidenceNum('')
  }

    return(
      <div className='page-container'>
        <div className='form-container box' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <h1 className='subtitle'>Add Device to Request</h1>
          <div>
            <form className='columns' style={{width:'100%'}}>
              <div className='column'>
                <label className='label'>
                  Device Type:
                  <div className='select is-small'>
                    <select value={devType} name='devType' onChange={(e)=> setDevType(e.target.value)} className='select'>
                      <option>-- Select ---</option>
                      <option>Desktop</option>
                      <option>DVR</option>
                      <option>External Drive</option>
                      <option>Laptop</option>
                      <option>Loose Drive</option>
                      <option>Mobile Device</option>
                      <option>Memory Card</option>
                      <option>USB Thumb Drive</option>
                      <option>Other</option>
                    </select>
                  </div>
                </label>
                <label className='label'>
                  Make:
                  <input value={make} name='make' onChange={(e)=> setMake(e.target.value)} className='input'></input>
                </label>
                <label className='label'>
                  Model:
                  <input value={model} name='model' onChange={(e)=> setModel(e.target.value)} className='input'></input>
                </label>
                <label className='label'>
                  Serial Number / IMEI:
                  <input value={serial} name='serial' onChange={(e)=> setSerial(e.target.value)} className='input'></input>
                </label>
              </div>
              <div className='column'>
                <label className='label'>
                  Legal Authority:
                  <div className='select is-small'>
                    <select value={authority} name='authority' onChange={(e)=> setAuthority(e.target.value)} className='select'>
                      <option>-- Select ---</option>
                      <option>Consent</option>
                      <option>Search Warrant</option>
                      <option>Found Property</option>
                    </select>
                  </div>
                </label>
                <label className='label'>
                  Passcode:
                  <input value={pin} name='pin' onChange={(e)=> setPin(e.target.value)} className='input'></input>
                </label>
                <label className='label'>
                  Agency Evidence #:
                  <input value={evidenceNum} name='evidenceNum' onChange={(e)=> setEvidenceNum(e.target.value)} className='input'></input>
                </label>
                <label className='label'>
                  Notes:
                  <input value={notes} name='notes' onChange={(e)=> setNotes(e.target.value)} className='input'></input>
                </label>
              </div>
            </form>
          </div>
        <button onClick={(e)=>{handleSubmit(e)}} className='button is-primary'>Add Device</button>
        </div>
      </div>
    )
}

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  addDevice: (device, reqId) => dispatch(addDeviceThunk(device, reqId)),
  getDevices: (id) => dispatch(getRequestsDevicesThunk(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceForm)
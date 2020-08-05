import React, { Component } from 'react';
import { connect } from 'react-redux';
import { whoami } from '../../store/thunks/loginThunks'

class DeviceForm extends Component{
  constructor(){
    super()
    
    this.state={
      make:'',
      model:'',
      serial:'',
      pin:'',
      authority:'',
      notes:'',
      requestId:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(e){
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e){
    e.preventDefault();
    const { history } = this.props;
    const { make, model, serial, authority, notes, pin, requestId } = this.state;
    const newDev={
      make,
      model,
      serial,
      authority,
      notes,
      pin,
      requestId
    }
    this.props.addDevice(newDev, history)
    this.setState({
      makee:'',
      model:'',
      serial:'',
      authority:'',
      notes:'',
      pin:'',
      requestId:''
    })
    
  }

  render(){ 
    const { make, model, serial, authority, pin, notes, requestId } = this.state
    return(
      <div>
        <form>
          <label>
            Make:
            <input value={make} name='make' onChange={this.handleInput}></input>
          </label>
          <label>
            Model:
            <input value={model} name='model' onChange={this.handleInput}></input>
          </label>
          <label>
            Serial Number / IMEI:
            <input value={serial} name='serial' onChange={this.handleInput}></input>
          </label>
          <label>
            Passcode:
            <input value={pin} name='pin' onChange={this.handleInput}></input>
          </label>
          <label>
            Legal Authority:
            <input value={authority} name='authority' onChange={this.handleInput}></input>
          </label>
          <label>
            Notes:
            <input value={notes} name='notes' onChange={this.handleInput}></input>
          </label>
          <button onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ request, user }) => ({ request, user });
const mapDispatchToProps = (dispatch) => ({
  addRequest: (request, history) => dispatch(addRequestThunk(request, history)),
  whoami: ()=> dispatch(whoami())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceForm)
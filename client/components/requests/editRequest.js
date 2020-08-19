import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRequestsThunk, updateRequestThunk } from '../../store/thunks/requestThunks';
import { whoami } from '../../store/thunks/loginThunks';


class EditRequest extends Component{
  constructor(){
    super()
    
    this.state={
      caseNumber:'',
      crime:'',
      urgency:'',
      userId:'',
      aP:'',
      suspect:'',
      service:'',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    await this.props.whoami();
    this.setState({userId: this.props.user.id})
    await this.props.getUserRequests(this.props.user.id)
    const req = await this.props.requests.find(currentReq=>currentReq.id===this.props.match.params.id)
    this.setState({
      caseNumber: req.caseNumber,
      crime:req.crime,
      urgency:req.urgency,
      userId:req.userId,
      aP:req.aP,
      suspect:req.suspect,
      service:req.service,
    })
  }
  
  handleInput(e){
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e){
    e.preventDefault();
    const { history } = this.props;
    const { caseNumber, crime, urgency, userId, aP, suspect, service } = this.state;
    const newRequest={
      caseNumber,
      crime,
      urgency,
      userId,
      aP,
      suspect,
      service
    }
    this.props.updateRequest(newRequest, this.props.match.params.id, history)
  }

  render(){ 
    const { caseNumber, crime, urgency, aP, suspect, service } = this.state;
    const {id} = this.props.match.params;
    const { history } = this.props;

    return(
      <div className='page-container'>
        <div className='form-container box' style={{display:'flex', flexDirection:'column'}}>
          <h1 className='subtitle'>Edit Request Information</h1>
          <div>
          <form className='columns' style={{width:'100%'}}>
            <div className='column'>
              <label className='label'>
                Internal Case Number:
                <input value={caseNumber} name='caseNumber' onChange={this.handleInput} className='input'></input>
              </label>
              <label className='label'>
                Crime Type:
                <input value={crime} name='crime' onChange={this.handleInput} className='input'></input>
              </label>
              <label className='label'>
                Service Requested:
                <div className='select is-small'>
                  <select value={service} name='service' onChange={this.handleInput} className='select'>
                    <option>-- Select ---</option>
                    <option>Cellphone Extraction</option>
                    <option>Forensic Exam</option>
                    <option>Imaging</option>
                    <option>DVR Extraction</option>
                  </select>
                </div>
              </label>
            </div>
            <div className='column'>
              <label className='label'>
                Suspect
                <input value={suspect} name='suspect' onChange={this.handleInput} className='input'></input>
              </label>
              <label className='label'>
                Assistant Prosecutor:
                <input value={aP} name='aP' onChange={this.handleInput} className='input'></input>
              </label>
              <label className='label'>
                Urgency:
                <div className='select is-small'>
                  <select value={urgency} name='urgency' onChange={this.handleInput} className='select'>
                    <option>-- Select ---</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div style={{display:'flex'}}>
          <button onClick={(e)=>{this.handleSubmit(e)}} className='button is-primary'>Save</button>
          <button onClick={()=> history.push(`/add-devices/${id}`)} className='button is-info'>Edit Devices</button>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ requests, user }) => ({ requests, user });
const mapDispatchToProps = (dispatch) => ({
  getUserRequests: (id) => dispatch(getUserRequestsThunk(id)),
  whoami: () => dispatch(whoami()),
  updateRequest: (obj, id, history) => dispatch(updateRequestThunk(obj, id, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRequest)
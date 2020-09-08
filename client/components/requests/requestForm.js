import React, { Component } from 'react';
import { connect } from 'react-redux';
import { whoami } from '../../store/thunks/loginThunks'
import { addRequestThunk, getUserRequestsThunk, deleteRequestThunk, submitRequestThunk } from '../../store/thunks/requestThunks';
import { white } from 'chalk';


class RequestForm extends Component{
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
    this.setState({requests: this.props.requests})
  }
  
  handleInput(e){
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e){
    e.preventDefault();
    const { history } = this.props;
    const { caseNumber, crime, urgency, userId, aP,  service } = this.state;
    const newRequest={
      caseNumber,
      crime,
      urgency,
      userId,
      aP,
      service
    }
    if(caseNumber===''||service===''){
      alert('Please fill out all required fields.')
    } else{
      this.props.addRequest(newRequest, history)
      this.setState({
        caseNumber:'',
        crime:'',
        urgency:'',
        userId:'',
        aP:'',
        service:''
      })
    }
  }

  render(){ 
    const { caseNumber, crime, urgency, aP, suspect, service } = this.state;
    const { requests, history } = this.props;

   if(this.props.user.role==='member'||this.props.user.role==='admin'){
    return(
      <div className='page-container'>
        <div className='top-container'>
          <div className='form-container box' style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <h1 className='subtitle'>Create a New Request</h1>
            <div>
              <form className='columns' style={{width:'100%'}}>
                <div className='column'>
                  <label className='label'>
                    Internal Case Number:<span style={{color:'red'}}>*</span>
                    <input value={caseNumber} name='caseNumber' onChange={this.handleInput} className='input'></input>
                  </label>
                  <label className='label'>
                    Crime Type:
                    <input value={crime} name='crime' onChange={this.handleInput} className='input'></input>
                  </label>
                </div>
                <div className='column'>
                  <label className='label'>
                    Assistant Prosecutor:
                    <input value={aP} name='aP' onChange={this.handleInput} className='input'></input>
                  </label>
                  <label className='label'>
                    Service Requested:<span style={{color:'red'}}>*</span>
                    <div className='select is-small'>
                      <select value={service} name='service' onChange={this.handleInput} className='select'>
                        <option>-- Select ---</option>
                        <option>Cellphone Extraction</option>
                        <option>Forensic Exam</option>
                        <option>Imaging</option>
                        <option>DVR Extraction</option>
                        <option>Video Editing</option>
                        <option>On Scene Preview</option>
                        <option>Search Warrant Assist</option>
                        <option>Other</option>
                      </select>
                    </div>
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
            <button onClick={(e)=>{this.handleSubmit(e)}} className='button is-primary form-button'>Create</button>
          </div>

        </div>

        <div className='table-container'>
          {requests.length===0 &&
            <h1 className='subtitle' style={{textAlign:'center'}}>Your do not have any requests.</h1>

          } 
          {requests.length>0 &&
          <div>
            <h1 className='subtitle'>Your Requests</h1>
            <table className='table is-hoverable is-striped'>
              <thead>
                <tr>
                  <th>Case Number</th>
                  <th>Crime Type</th>
                  <th>Assistant Prosecutor</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Urgency</th>
                </tr>
              </thead>
              <tbody>
            { 
              requests.map(req=>{
                return (
                    <tr key={req.id}>
                      <td>{req.caseNumber}</td>
                      <td>{req.crime}</td>
                      <td>{req.aP}</td>
                      <td>{req.service}</td>
                      <td>{req.status}</td>
                      <td>{req.urgency}</td>
                      {req.status==='Incomplete' &&
                        <td><button className='button is-outlined is-info is-small' onClick={()=>history.push(`/edit-request/${req.id}`)}>Edit</button></td>
                      }
                      {req.status==='Incomplete' &&
                        <td><button className='button is-danger is-outlined is-small' onClick={()=>this.props.deleteRequest(req.id)}>Delete</button></td>
                      } 
                      {req.status==='Incomplete' &&
                        <td>
                          <button className='button is-primary is-outlined is-small' onClick={()=>{
                            req.status==='Submitted';
                            this.props.submitRequest(req.id, history)
                          }}>Submit</button>
                        </td>
                      }
                    </tr>
                    )
                  })
            }
                </tbody>
            </table>
            <h1 style={{textAlign:'center', color:'red'}}>Please make sure to submit requests once all information is filled out and legal process has been uploaded.</h1>
          </div>
          }
        </div>
      </div>
    )
  } else {
    return <h1 style={{color:'white', textAlign:'center', marginTop:'200px'}}>Unathorized</h1>
  }
  }
}

const mapStateToProps = ({ request, user, requests }) => ({ request, user, requests });
const mapDispatchToProps = (dispatch) => ({
  addRequest: (request, history) => dispatch(addRequestThunk(request, history)),
  whoami: () => dispatch(whoami()),
  getUserRequests: (id) => dispatch(getUserRequestsThunk(id)),
  deleteRequest: (id) => dispatch(deleteRequestThunk(id)),
  submitRequest: (request, id, history) => dispatch(submitRequestThunk(request, id, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm)
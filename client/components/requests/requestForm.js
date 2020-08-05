import React, { Component } from 'react';
import { connect } from 'react-redux';
import { whoami } from '../../store/thunks/loginThunks'
import { addRequestThunk } from '../../store/thunks/requestThunks';

class RequestForm extends Component{
  constructor(){
    super()
    
    this.state={
      caseNumber:'',
      crime:'',
      urgency:'',
      userId:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount(){
    await this.props.whoami();
    this.setState({userId: this.props.user.id})
  }
  
  handleInput(e){
    this.setState({[e.target.name]: e.target.value})
  }
  
  handleSubmit(e){
    e.preventDefault();
    const { history } = this.props;
    const { caseNumber, crime, urgency, userId } = this.state;
    const newRequest={
      caseNumber,
      crime,
      urgency,
      userId
    }
    this.props.addRequest(newRequest, history)
    this.setState({
      caseNumber:'',
      crime:'',
      urgency:'',
      userId:''
    })
    
  }

  render(){ 
    const { caseNumber, crime, urgency } = this.state
    return(
      <div>
        <form>
          <label>
            Internal Case Number:
            <input value={caseNumber} name='caseNumber' onChange={this.handleInput}></input>
          </label>
          <label>
            Crime Type:
            <input value={crime} name='crime' onChange={this.handleInput}></input>
          </label>
          <label>
            Urgency:
            <select value={urgency} name='urgency' onChange={this.handleInput}>
              <option>-- Select ---</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestForm)
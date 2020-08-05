import React, { Component } from 'react';
import { addUserThunk } from '../../store/thunks/userThunks';
import { connect } from 'react-redux';

class SignUpForm extends Component{
  constructor(){
    super()
    
    this.state={
      email:'',
      name:'',
      department:'',
      password:'',
      role:'member'
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const { email, name, department, password, role} = this.state;
    const newUser={
      email,
      name,
      department,
      password,
      role
    }
    this.props.addUser(newUser)
    this.setState({
      email:'',
      name:'',
      department:'',
      password:''
    })
    
  }

  render(){ 
    const { email, name, department, password } = this.state
    return(
      <div>
        <form>
          <label>
            Email:
            <input value={email} type='username' name='email' onChange={this.handleInput}></input>
          </label>
          <label>
            Name:
            <input value={name} name='name' onChange={this.handleInput}></input>
          </label>
          <label>
            Department:
            <input value={department} name='department' onChange={this.handleInput}></input>
          </label>
          <label>
            Password:
            <input value={password} type='password' name='password' onChange={this.handleInput}></input>
          </label>
          <button onClick={(e)=>{this.handleSubmit(e)}}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUserThunk(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
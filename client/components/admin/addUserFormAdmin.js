import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../store/thunks/adminThunks';

class AddUserAdmin extends Component{
  constructor(){
    super()
    this.state={
      email:'',
      name:'',
      department:'',
      password:'',
      role:''
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
    console.log(newUser)
    this.props.addUser(newUser)
    this.setState({
      email:'',
      name:'',
      department:'',
      password:'',
      role:''
    })
    
  }

  render(){ 
    const { email, name, department, password, role } = this.state
    return(
      <div className='page-container'>
        <div className='box'>
          <form style={{display:'flex',flexDirection:'column'}}>
            <h1 className='title'>Add User</h1>
            <label className='label'>
              Email:
              <input value={email} type='username' name='email' onChange={this.handleInput} className='input'></input>
            </label>
            <label className='label'>
              Name:
              <input value={name} name='name' onChange={this.handleInput} className='input'></input>
            </label>
            <label className='label'>
              Department:
              <input value={department} name='department' onChange={this.handleInput} className='input'></input>
            </label>
            <label className='label'>
              Password:
              <input value={password} type='password' name='password' onChange={this.handleInput} className='input'></input>
            </label>
            <label className='label'>
              Role:
              <select value={role} name='role' onChange={this.handleInput} className='select'>
                <option>-- Select ---</option>
                <option>member</option>
                <option>admin</option>
              </select>
            </label>
            <button onClick={(e)=>{this.handleSubmit(e)}} className='button is-primary'>Submit</button>
          </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserAdmin);
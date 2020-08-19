import React, { Component } from 'react';
import { addUserThunk } from '../../store/thunks/userThunks';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';
import { createPassword, validateEmail } from '../../../server/utils';

class SignUpForm extends Component{
  constructor(){
    super()
    
    this.state={
      email:'',
      name:'',
      department:'',
      cellphone:'',
      workPhone:'',
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
    const { email, name, department, role, cellphone, workPhone} = this.state;
    const { history } = this.props;
    const password = createPassword(7)
    if(email==='' || name ==='' || department==='' || cellphone===''){
      alert('Please fill out all required fields')
      return 
    } 
    if (name.split(' ').length<2){
      alert('Please enter first and last name')
    } 
    else if (validateEmail(email)) {
      const newUser={
        email,
        name,
        department,
        cellphone,
        workPhone,
        password,
        role
      }
      this.props.addUser(newUser);
      const templateParams = {
        user_email: email,
        user_name: email,
        user_password: password
    };

      emailjs.send('default_service','password', templateParams, 'user_tTsRr99N7kbLQSnRBWK41')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
    } else {
        alert('Please enter a valid agency email.')
      }
  }

  render(){ 
    const { email, name, department, cellphone, workPhone } = this.state
    return(
      <div className='home'>
        <div className='flex-container'>
          <form className='box' style={{width:'40%', marginTop:'100px'}}>
            <label className='label'>
              Email:
              <input value={email} type='username' name='email' onChange={this.handleInput} className={email==='' ? 'is-danger input' : 'input'}></input>
            </label>
            <label className='label'>
              Name:
              <input value={name} name='name' onChange={this.handleInput} className={name==='' ? 'is-danger input' : 'input'}></input>
            </label>
            <label className='label'>
              Department:
              <input value={department} name='department' onChange={this.handleInput} className={department==='' ? 'is-danger input' : 'input'}></input>
            </label>
            <label className='label'>
              Cellphone:
              <input value={cellphone} name='cellphone' onChange={this.handleInput} className={cellphone==='' ? 'is-danger input' : 'input'}></input>
            </label>
            <label className='label'>
              Work Phone:
              <input value={workPhone} name='workPhone' onChange={this.handleInput} className={workPhone==='' ? 'is-danger input' : 'input'}></input>
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
  addUser: (user) => dispatch(addUserThunk(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
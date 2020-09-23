import React, {useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import emailjs from'emailjs-com';

const ForgotPassword = (props) =>{
  
  const [email, setEmail] = useState('');
  const [submited, setSubmitted] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('api/users/forgot', {email})
    .then(({data})=> {
      console.log(data)
      if(data){
        const templateParams = {
          user_email: email,
          user_name: email,
          user_password: data
        };
        emailjs.send('default_service','template_rS0jgVFS', templateParams, 'user_tTsRr99N7kbLQSnRBWK41')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
          console.log('FAILED...', err);
        });
        setSubmitted(true);
      } else {
        alert('Username not found')
      }
    })
  }

  return (
    <div className='page-container' style={{height:'100vh'}}>
      <div className='top-container' style={{height:'100vh'}}> 
        <div className='box' style={{textAlign:'center'}}>
          { !submited &&
          <div>
              <label className='label' style={{textAlign:'left'}}>
                Enter your email:
                <input value={email} onChange={(e)=> setEmail(e.target.value)} className='input'></input>
              </label>
              <button className='button is-primary' onClick={handleSubmit}>Submit</button>
            </div>
          }
          {submited &&
            <h1>A new password will be sent to your email if your account exists.</h1>
          }
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (props) => (props);
export default connect(mapStateToProps, null)(ForgotPassword);

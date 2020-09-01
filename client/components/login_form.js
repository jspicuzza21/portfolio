import React, { Component } from 'react';
import { connect } from 'react-redux';
import { whoami } from '../store/thunks/loginThunks';
import { Login, Logout } from './index';

class LoginForm extends Component{
  constructor() {
    super();
    this.showLoginOrLogout = this.showLoginOrLogout.bind(this);
  }
  componentDidMount(){
    whoami()
  }
  
  
  showLoginOrLogout(){
    return (
      <div className='home'>
        <div>
          { this.props.user.loggedIn ? <Logout /> : <Login history={this.props.history} />}
        </div>
      </div>
      );
    }
    
    render(){
      console.log(this.props.user)
    return (
      <div>
        {this.showLoginOrLogout()}
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  whoAmI: () => dispatch(whoami()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
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
    return this.props.user.username ? <Logout /> : <Login />;
  }

  render(){
    
    return (
      <div>
        {this.showLoginOrLogout()}
      </div>
    )
  }
}

const mapStateToProps = ({ user, loading }) => ({ user, loading });
const mapDispatchToProps = (dispatch) => ({
  whoAmI: () => dispatch(whoami()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
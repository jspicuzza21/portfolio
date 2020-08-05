import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { whoami } from '../store/thunks/loginThunks';

const NavBar = ({ whoAmI, user }) => {
  const [role, setRole] = useState('guest');

  useEffect(() => {
    whoAmI();
  }, []);

  useEffect(() => {
    if (user.role === 'admin') {
      setRole('admin')
    } else if (user.role==='member'){
      setRole('member')
    } else {
      setRole('guest')
    }
  });

  return (
    <div>
      <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className='navbar-brand'>
          <Link to="/" className="navbar-item">Home</Link>
          {role==='admin' &&
            <Link to="/request" className="navbar-item">Submit Request</Link>
          }
          {role==='member' &&
            <Link to="/new-request" className="navbar-item">Submit Request</Link>
          }
          {role==='admin' &&
            <Link to="/admin" className="navbar-item">Admin</Link>
          }
          <Link to="/login" className="navbar-item">{user.email? 'Log Out' : 'Login'}</Link>
          {
            role==='guest' &&
            <Link to="/signup" className="navbar-item">Sign Up</Link>
          }
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  whoAmI: () => dispatch(whoami()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
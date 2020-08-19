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
      <nav className={user.role==='admin'?'navbar is-dark' :"navbar is-light"} role="navigation" aria-label="main navigation">
        <div className='navbar-brand'>
          {role==='admin' &&
            <Link to="/new-request" className="navbar-item">Requests</Link>
          }
          {role==='member' &&
            <Link to="/new-request" className="navbar-item">Requests</Link>
          }
          {role==='admin' &&
            <Link to="/admin" className="navbar-item">Admin</Link>
          }
          {
            role==='guest' &&
            <Link to="/signup" className="navbar-item">Sign Up</Link>
          }
          {
            role!=='guest' &&
            <Link to="/profile" className="navbar-item">Profile</Link>
          }
          <Link to="/" className="navbar-item">{user.email? 'Log Out' : 'Login'}</Link>
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
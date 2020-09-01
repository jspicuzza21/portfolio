import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { whoami } from '../store/thunks/loginThunks';
import Picture1 from '../assets/images/Picture1.png';

const NavBar = ({ whoAmI, user, history }) => {
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
        <div id="navbarHeader" className='navbar-menu' >
          <div className='navbar-start'>
            <div className='nav-image'>

            </div>
            {/* <img src={Picture1} className='nav-image'></img> */}
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
              role!=='guest' &&
              <Link to="/profile" className="navbar-item">Profile</Link>
            }
          </div>
          <div id="navbarHeader" className='navbar-end'>
            {
              role==='guest' &&
              <div className="navbar-item">
                <button onClick={()=> window.location.hash='#/signup'} className='button is-info'>Sign Up</button>
              </div>
            }
            <div className="navbar-item">
              <button onClick={()=> window.location.hash='#/'} className={user.email? 'button is-danger' : 'button is-primary'}>{user.email? 'Log Out' : 'Login'}</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = ({ user, history }) => ({ user, history });
const mapDispatchToProps = (dispatch) => ({
  whoAmI: () => dispatch(whoami()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
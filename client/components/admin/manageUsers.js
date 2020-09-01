import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllUsers, deleteUserThunk } from '../../store/thunks/adminThunks';
import AddUserAdmin from './addUserFormAdmin';

const ManageUsers = (props) =>{

  useEffect(()=>{
    props.getUsers();
  }, [])

  console.log(props)

  return(
    <div className='page-container'>
      <div className='top-container'>
        <AddUserAdmin />
      </div>
      <div>
        <table className='table is-hoverable is-striped'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Department</td>
              <td>Phone #</td>
              <td>Role</td>
            </tr>
          </thead>
          <tbody>
            {props.admin.allUsers &&
              props.admin.allUsers.map(user=>{
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.department}</td>
                    <td>{user.workPhone}</td>
                    <td>{user.role}</td>
                    { user.id !== props.user.id &&
                      <td><button onClick={()=> props.deleteUser(user.id)} className='button is-danger is-outlined is-small'>Delete</button></td>
                    }
                    {/* <td><button className='button is-info is-outlined is-small'>Edit</button></td> */}
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    </div>
  )
} 

const mapStateToProps = (props) => (props);
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getAllUsers()),
  deleteUser: (id) => dispatch(deleteUserThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
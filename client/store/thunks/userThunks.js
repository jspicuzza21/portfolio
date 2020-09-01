import { addUser, getUsers, logout } from '../actions';
import axios from 'axios';

export const addUserThunk = (newUser) => {
  return (dispatch) => {
    return axios.post('/api/create', newUser)
      .then(({ data }) => {
        dispatch(addUser(data));
      })
      .then(()=>{
        axios.get('/api/logout')
        .then(() => {
          dispatch(logout());
        })
        .catch((e) => {
          console.log(e);
        });
      })
      .catch((e) => {
        console.error(e);
      })
  }
}

export const getUserThunk = () => {
  return (dispatch) => {
    return axios.get('/api/create')
      .then(({ data }) => {
        dispatch(getUsers(data));
      })
      .catch((e) => {
        console.error(e);
      })
  }
}
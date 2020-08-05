import { addUser, getUsers } from '../actions';
import axios from 'axios';

export const addUserThunk = (newUser) => {
  return (dispatch) => {
    return axios.post('/api/create', newUser)
      .then(({ data }) => {
        dispatch(addUser(data));
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
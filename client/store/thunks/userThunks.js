import { addUser } from '../actions';
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
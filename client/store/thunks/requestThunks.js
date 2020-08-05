import { addRequest } from '../actions';
import axios from 'axios';

export const addRequestThunk = (newRequest, history) => {
  return (dispatch) => {
    return axios.post('/req/request', newRequest)
      .then(({ data }) => {
        dispatch(addRequest(data));
        history.push('/add-devices')
      })
      .catch((e) => {
        console.error(e);
      })
  }
}
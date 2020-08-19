import { login, logout, loginFail } from '../actions';
import axios from 'axios';

export const loginThunk = (email, password, history) => (dispatch) => {
  return axios
    .post('/api/login', { email, password })
    .then((res) => {
      const user = {
        email,
        role: res.data.role,
        name: res.data.name,
        id: res.data.id,
        department: res.data.department,
        cellphone: res.data.cellphone,
        workPhone: res.data.workPhone,
        initialLogin: true
      }
      dispatch(login(user));
      history.push('/profile')
    })
    .catch(() => {
      dispatch(loginFail('Incorrect email or password'));
    });
};

export const logoutThunk = () => (dispatch) => {
  return axios
    .get('/api/logout')
    .then(() => {
      dispatch(logout());
    })
    .catch((e) => {
      console.log(e);
    });
};

export const whoami = () => (dispatch) => {
  return axios.get('/api/whoami').then(({ data }) => {
    if (data.loggedIn) {
      // const user = {
      //   email: data.email,
      //   role: data.role,
      //   id: data.id
      // }
      const user = {
        email: data.email,
        role: data.role,
        name: data.name,
        id: data.id,
        department: data.department,
        cellphone: data.cellphone,
        workPhone: data.workPhone
      }
      dispatch(login(user));
    } else {
      dispatch(logout());
    }
  });
};
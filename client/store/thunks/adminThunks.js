import { types } from '../actions';
import axios from 'axios';

export const getRequestsThunk = (id)=> {
  return (dispatch) => {
    return axios.get(`/admin/request/`)
    .then(({data})=>{
      dispatch({
        type: types.GET_ALL_REQS,
        payload: data 
      })
    })
    .catch(e=>{
      console.log('error getting requests')
      console.log(e)
    })
  }
}

export const getSingleRequestThunk = (id)=> {
  return (dispatch) => {
    return axios.get(`/admin/request/${id}`)
    .then(({data})=>{
      dispatch({
        type: types.GET_SINGLE_REQ,
        payload: data 
      })
    })
    .catch(e=>{
      console.log('error getting requests')
      console.log(e)
    })
  }
}

export const getDevicesThunk = (id)=> {
  return (dispatch) => {
    return axios.get(`/admin/devices/`)
    .then(({data})=>{
      dispatch({
        type: types.GET_DEVICES,
        payload: data 
      })
    })
    .catch(e=>{
      console.log('error getting devices')
      console.log(e)
    })
  }
}

export const getFilteredDevicesThunk = (property, filter)=> {
  return (dispatch) => {
    return axios.get(`/admin/devices/filter/${property}?${property}=${filter}`)
    .then(({data})=>{
      dispatch({
        type: types.GET_DEVICES,
        payload: data 
      })
    })
    .catch(e=>{
      console.log('error getting devices')
      console.log(e)
    })
  }
}

export const getFilteredRequestsThunk = (property, filter)=> {
  console.log('prop', property,'filter', filter)
  return (dispatch) => {
    return axios.get(`/admin/request/filter/${property}?${property}=${filter}`)
    .then(({data})=>{
      dispatch({
        type: types.GET_ALL_REQS,
        payload: data 
      })
    })
    .catch(e=>{
      console.log('error getting requests')
      console.log(e)
    })
  }
}

export const updateRequestStatusThunk = (id, updatedStatus) => (dispatch) => {
  return axios.put(`/admin/request/status/${id}`, {updatedStatus})
    .then(res => {
      dispatch({
        type: types.UPDATE_REQ_STATUS,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log('failed to update Request')
      console.log(e)
    })
}

export const getAllUsers = ()=> (dispatch) => {
  return axios.get('/admin/users')
    .then(res => {
      dispatch({
        type: types.GET_USERS,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log('failed to get All users')
      console.log(e)
    })
}

export const deleteUserThunk = (id)=> (dispatch) => {
  return axios.delete(`/admin/users/${id}`)
    .then(res => {
      dispatch({
        type: types.DELETE_USER,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log('failed to delete User')
      console.log(e)
    })
}

// export const updateUserThunk = (id)=> (dispatch) => {
//   return axios.put(`/admin/users/${id}`)
//     .then(res => {
//       dispatch({
//         type: types.UPDATE_USER,
//         payload: res.data
//       })
//     })
//     .catch((e) => {
//       console.log('failed to update User')
//       console.log(e)
//     })
// }

export const createUser = (user)=> (dispatch) => {
  return axios.post(`/admin/users`, user)
    .then(res => {
      dispatch({
        type: types.ADD_USER_ADMIN,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log('failed to add User')
      console.log(e)
    })
}

export const updateUser = (user)=> (dispatch) => {
  return axios.put(`/admin/users/${id}`)
    .then(res => {
      dispatch({
        type: types.UPDATE_USER,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log('failed to update User')
      console.log(e)
    })
}

export const adminDeleteRequestThunk = (id) => {
  return (dispatch) => {
    return axios.delete(`/admin/request/${id}`)
      .then(res => {
        dispatch({
          type: types.DELETE_REQUEST_ADMIN,
          payload: res.data
        })
      })
      .catch((e) => {
        console.log('failed to delete request')
        console.log(e)
      })
    }
  };

export const deleteDeviceThunk = (id) => {
  return (dispatch) => {
    return axios.delete(`/req/devices/${id}`)
      .then(res => {
        dispatch({
          type: types.DELETE_DEVICE_ADMIN,
          payload: res.data
        })
      })
      .catch((e) => {
        console.log('failed to delete device')
        console.log(e)
      })
    }
  };
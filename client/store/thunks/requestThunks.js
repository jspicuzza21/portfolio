import { addRequest, types } from '../actions';
import axios from 'axios';

export const addRequestThunk = (newRequest, history) => {
  return (dispatch) => {
    return axios.post('/req/request', newRequest)
      .then(({ data }) => {
        dispatch(addRequest(data));
        history.push(`/add-devices/${data.id}`)
      })
      .catch((e) => {
        console.error(e);
      })
  }
}

export const addDeviceThunk = (newDevice) => {
  return (dispatch) => {
    return axios.post(`/req/devices`, newDevice)
      .then(({ data }) => {
        dispatch({
          type: types.ADD_DEVICE,
          payload: data
        });
      })
      .catch((e) => {
        console.error(e);
      })
  }
}

export const getUserRequestsThunk = (id)=> {
  return (dispatch) => {
    return axios.get(`/req/request/${id}`)
    .then(({data})=>{
      dispatch({
        type: types.GET_USER_REQUESTS,
        payload: data 
      })
    })
    .catch(e=>{
      console.log('error getting requests')
      console.log(e)
    })
  }
}

export const getRequestsDevicesThunk = (id)=> {
  return (dispatch) => {
    return axios.get(`/req/devices/${id}`)
    .then(({data})=>{
      dispatch({
        type: types.GET_REQUEST_DEVICES,
        payload: data 
      })
    })
    .catch(e=>{
      console.log('error getting devices')
      console.log(e)
    })
  }
}

export const updateDeviceThunk = (make, model, serial, pin, authority, notes , requestId, devType, evidenceNum, id, history) => (dispatch) => {
  const updatedDevice = { make, model, serial, pin, authority, notes , requestId, devType, evidenceNum }
  return axios.put(`/req/devices/${id}`, updatedDevice)
    .then(res => {
      dispatch({
        type: types.UPDATE_DEVICE,
        payload: res.data
      })
      history.push('/new-request')
    })
    .catch((e) => {
      console.log('failed to update Device')
      console.log(e)
    })
}

export const updateRequestThunk = (obj, id, history) => (dispatch) => {
  return axios.put(`/req/request/${id}`, obj)
    .then(res => {
      dispatch({
        type: types.UPDATE_REQUEST,
        payload: res.data
      })
      history.push('/new-request')
    })
    .catch((e) => {
      console.log('failed to update Request')
      console.log(e)
    })
}

export const deleteDeviceThunk = (id) => (dispatch) => {
  return axios.delete(`/req/devices/${id}`)
    .then(res => {
      dispatch({
        type: types.DELETE_DEVICE,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log('failed to delete device')
      console.log(e)
    })
};

export const deleteRequestThunk = (id) => {
return (dispatch) => {
  return axios.delete(`/req/request/${id}`)
    .then(res => {
      dispatch({
        type: types.DELETE_REQUEST,
        payload: res.data
      })
    })
    .catch((e) => {
      console.log('failed to delete request')
      console.log(e)
    })
  }
};

export const submitRequestThunk = (id, history) => (dispatch) => {
  return axios.put(`/req/request/status/${id}`)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: types.UPDATE_REQUEST,
        payload: res.data
      })
      history.push('/new-request')
    })
    .catch((e) => {
      console.log('failed to update Request')
      console.log(e)
    })
}
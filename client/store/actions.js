export const types = {
  INITIAL_LOADING_COMPLETE: 'INITIAL_LOADING_COMPLETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_FAIL: 'LOGIN_FAIL',
  ADD_USER: 'ADD_USER',
  ADD_REQUEST: 'ADD_REQUEST',
  GET_USERS: 'GET_USERS',
  GET_USER_REQUESTS: 'GET_USER_REQUESTS',
  ADD_DEVICE: 'ADD_DEVICE',
  GET_REQUEST_DEVICES: 'GET_REQUEST_DEVICES',
  UPDATE_DEVICE: 'UPDATE_DEVICE',
  UPDATE_REQUEST: 'UPDATE_REQUEST',
  DELETE_DEVICE: 'DELETE_DEVICE',
  DELETE_REQUEST: 'DELETE_REQUEST',
  GET_ALL_REQS: 'GET_ALL_REQS',
  GET_SINGLE_REQ: 'GET_SINGLE_REQ',
  UPDATE_REQ_STATUS:'UPDATE_REQ_STATUS',
  GET_DEVICES:'GET_DEVICES',
  UPDATE_USER: 'UPDATE_USER',
  DELETE_USER: 'DELETE_USER',
  ADD_USER_ADMIN: 'ADD_USER_ADMIN',
  DELETE_REQUEST_ADMIN: 'DELETE_REQUEST_ADMIN',
}

const changeInitialLoading=()=>({
  type: types.INITIAL_LOADING_COMPLETE,
})

const login = (user) => ({
  type: types.LOGIN,
  email: user.email,
  role: user.role,
  id: user.id,
  name: user.name,
  cellphone: user.cellphone,
  workPhone: user.workPhone,
  department: user.department
});

const logout = () => ({
  type: types.LOGOUT,
});

const loginFail = (message) => ({
  type: types.LOGIN_FAIL,
  message,
});

const addUser = (user) =>({
  type: types.ADD_USER,
  payload: user
});

const addRequest = (request) =>({
  type: types.ADD_REQUEST,
  payload: request
});

const getUsers = ()=> {
  type: types.GET_USERS,
  payload
}

export {
  changeInitialLoading,
  login,
  logout,
  loginFail,
  addUser,
  addRequest,
  getUsers,
}
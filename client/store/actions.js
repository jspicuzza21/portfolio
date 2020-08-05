export const types = {
  INITIAL_LOADING_COMPLETE: 'INITIAL_LOADING_COMPLETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_FAIL: 'LOGIN_FAIL',
  ADD_USER: 'ADD_USER',
  ADD_REQUEST: 'ADD_REQUEST',
  GET_USERS: 'GET_USERS',
}

const changeInitialLoading=()=>({
  type: types.INITIAL_LOADING_COMPLETE,
})

const login = (email, role, id) => ({
  type: types.LOGIN,
  email,
  role,
  id
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

const getUsers=()=>{
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
  getUsers
}
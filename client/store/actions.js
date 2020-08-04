export const types = {
  INITIAL_LOADING_COMPLETE: 'INITIAL_LOADING_COMPLETE',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOGIN_FAIL: 'LOGIN_FAIL',
}

const changeInitialLoading=()=>({
  type: types.INITIAL_LOADING_COMPLETE,
})

const login = (username, role) => ({
  type: types.LOGIN,
  username,
  role,
});

const logout = () => ({
  type: userTypes.LOGOUT,
});

const loginFail = (message) => ({
  type: types.LOGIN_FAIL,
  message,
});

export {
  changeInitialLoading,
  login,
  logout,
  loginFail,
}
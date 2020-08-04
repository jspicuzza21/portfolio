export const types = {
  UPDATE_FORM:'UPDATE_FORM',
  SET_LOGGED_IN: 'SET_LOGGED_IN',
  INITIAL_LOADING_COMPLETE: 'INITIAL_LOADING_COMPLETE'
}

const updateForm=(name, value)=> ({
  type: types.UPDATE_FORM,
  name,
  value
})

const setLoggedIn=()=>({
  type: types.SET_LOGGED_IN,
})

const changeInitialLoading=()=>({
  type: types.INITIAL_LOADING_COMPLETE,
})

export {
  updateForm,
  setLoggedIn,
  changeInitialLoading,
}
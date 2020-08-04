import { updateForm, setLoggedIn, types } from './actions';

const initialState={
  username:'',
  password:'',
  loggedIn: false,
  initialLoadingComplete: false,
}

const reducer=(state=initialState, action)=>{
  switch(action.type){
    case types.UPDATE_FORM:
      return {
        ...state,
        [action.name]: action.value
      };
    case types.SET_LOGGED_IN:
      return {
        ...state,
        username:'',
        password:'',
        loggedIn:true
      };
    case types.INITIAL_LOADING_COMPLETE:
      return {
        ...state,
        initialLoadingComplete: true
      };
    default: return state;
  }
}

export default reducer;
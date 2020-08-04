import { types } from './actions';
import { combineReducers } from 'redux';

const initialState={
  username:'',
  password:'',
  loggedIn: false,
  initialLoadingComplete: false,
}

const loginReducer=(state=initialState, action)=>{
  switch(action.type){
    case types.LOGIN:
      return {
        ...state,
        username: action.username,
        loggedIn: true,
        role: action.role,
      };
    case types.LOGOUT:
      return {
        ...state,
        username: null,
        loggedIn: false,
        role: 'guest'
      };
    case types.INITIAL_LOADING_COMPLETE:
      return {
        ...state,
        initialLoadingComplete: true
      };
    default: return state;
  }
}

const reducer = combineReducers({
  user: loginReducer,
});

export default reducer;
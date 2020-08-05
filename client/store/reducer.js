import { types } from './actions';
import { combineReducers } from 'redux';

const initialState={
  email:'',
  loggedIn: false,
  role:'guest',
  initialLoadingComplete: false,
}

const loginReducer=(state=initialState, action)=>{
  switch(action.type){
    case types.LOGIN:
      return {
        ...state,
        email: action.email,
        loggedIn: true,
        role: action.role,
        id: action.id
      };
    case types.LOGOUT:
      return {
        ...state,
        email: null,
        loggedIn: false,
        role: 'guest'
      };
    case types.ADD_USER:
      return {
        email: action.payload.email,
        loggedIn:true,
        role: action.payload.role,
      };
    default: return state;
  }
}

const reducer = combineReducers({
  user: loginReducer,
  
});

export default reducer;
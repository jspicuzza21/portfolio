import { types } from './actions';
import { combineReducers } from 'redux';

const initialState={
  email:'',
  loggedIn: false,
  role:'guest',
  initialLoadingComplete: false,
  failedLogin:false
}

const initialRequestState={
  requests:[], 
}

const initialDevicesState={
  devices:'', 
}

const loginReducer=(state=initialState, action)=>{
  switch(action.type){
    case types.LOGIN:
      return {
        ...state,
        email: action.email,
        loggedIn: true,
        role: action.role,
        id: action.id,
        name: action.name,
        cellphone: action.cellphone,
        workPhone: action.workPhone,
        department: action.department,
        failedLogin:false
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        failedLogin:true
      }
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

const requestReducer=(state=initialRequestState, action)=>{
  switch(action.type){
    case types.GET_USER_REQUESTS:
      return action.payload;
    case types.ADD_REQUEST:
      return [...state, action.payload];
    case types.UPDATE_REQUEST:
      return action.payload;
    case types.DELETE_REQUEST:
      return action.payload.requests
    default: return state;
  }
}

const initialAdminState={
  allReqs:[],
  singleReq:'',
  allUsers:[],
  singleUser:'',
  allDevs:[],
}

const adminReducer=(state=initialAdminState, action)=>{
  switch(action.type){
    case types.GET_ALL_REQS:
      return {
        ...state,
        allReqs: action.payload
      }
    case types.GET_SINGLE_REQ:
      return {
        ...state,
        singleReq: action.payload
      };
    case types.UPDATE_REQ_STATUS:
      return {
        ...state,
        singReq:action.payload
      };
    case types.GET_DEVICES:
      return {
        ...state,
        allDevs:action.payload
      };
    case types.DELETE_USER:
      return {
        ...state,
        allUsers: action.payload
      };
    case types.UPDATE_USER:
      return {
        ...state,
        allUsers: action.payload
      }
    case types.GET_USERS:
      return {
        ...state,
        allUsers: action.payload
      }
    case types.ADD_USER_ADMIN:
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload]
      }
    case types.DELETE_REQUEST_ADMIN:
      return {
        ...state,
        allReqs: action.payload,
      }
    case types.DELETE_DEVICE_ADMIN:
      return {
        ...state,
        allDevs: action.payload,
      }
    default: return state;
  }
}

const deviceReducer=(state=initialDevicesState, action)=>{
  switch(action.type){
    case types.ADD_DEVICE:
      return [...state, action.payload];
    case types.GET_REQUEST_DEVICES:
      return action.payload;
    case types.DELETE_DEVICE:
      return action.payload;
    case types.UPDATE_DEVICE:
      return action.payload
    default: return state;
  }
}

const reducer = combineReducers({
  user: loginReducer,
  requests: requestReducer,
  devices: deviceReducer,
  admin: adminReducer
});

export default reducer;
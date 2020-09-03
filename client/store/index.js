import { createStore, applyMiddleware, combineReducers , compose} from 'redux';
import thunks from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer,applyMiddleware(thunks));

export default store; 

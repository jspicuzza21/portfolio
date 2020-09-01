import { createStore, applyMiddleware, combineReducers , compose} from 'redux';
import thunks from 'redux-thunk';
import reducer from './reducer';


// const loggingMiddleware=store=>next=>action=>{
//   console.log('Action:', action)
//   next(action);
//   console.log('New State', store.getState())
// }


const store = createStore(reducer, 
  compose(
    applyMiddleware(thunks),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store; 

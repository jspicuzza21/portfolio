import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { LoginForm, LoggedIn, LoadingComponent } from './components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import store from './store/index';
import { changeInitialLoading, setLoggedIn, } from './store/actions'
import axios from 'axios';

const app = document.querySelector('#app');

class HomePage extends Component{
  constructor(){
    super()
    this.state={
      loaded: store.getState().initialLoadingComplete,
    }

    store.subscribe(()=>{
      this.setState({loaded: store.getState().initialLoadingComplete})
    })
  }

  componentDidMount(){ 
    axios.get('/api/whoami')
      .then(({data})=>{
        if(data.loggedIn){
          console.log('setting logged in')
          store.dispatch(setLoggedIn());
        }
      })
      .catch((e)=>{
        console.error(e)
      })
      .finally(()=>{
        store.dispatch(changeInitialLoading());
      })
  }

  render(){
    const { loaded } = this.state;

    return (
      <BrowserRouter >
      {!loaded && <LoadingComponent/>

      }
      { loaded &&
        <Switch>
          <Route exact path={'/'} component={LoginForm}></Route>
          <Route exact path={'/account'} component={LoggedIn}></Route>
          <Redirect to='/' />
        </Switch>
      }
      </BrowserRouter >
    )
  }
}

ReactDom.render(
  <HomePage/>,
  app,
  ()=>{
    console.log('app rendered')
  }
)
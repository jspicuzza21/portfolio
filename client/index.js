import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/home';

class App extends Component{  
  render(){
    return (
        <BrowserRouter >
            <Switch>
              <Route exact path={'/'} component ={Home}></Route>
              <Redirect to='/' />
            </Switch>
        </BrowserRouter >
    )
  }
}

const app = document.querySelector('#app');

ReactDom.render(
  <App/>,
  app,
  ()=>console.log('app rendered'))
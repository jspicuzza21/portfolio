import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { LoginForm, LoggedIn, Home, SignUpForm, RequestForm, UserRequestDevices, EditRequest, AdminConsole, NewRequests, SingleRequest, RequestArchive, Stats, DeviceStats, RequestStats, ManageUsers, addUserAdminForm, Profile, ChangePassword, SignUpComplete, EditProfile} from './components'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import NavBar from './components/nav';
import { ThemeProvider } from "@chakra-ui/core";
import Footer from './components/footer';


class App extends Component{  
  render(){
    return (
      <Provider store={store}>
        <HashRouter >
          <ThemeProvider>
            <Route render={() => <NavBar />} />
            <Switch>
              <Route exact path={'/'} component ={LoginForm}></Route>
              {/* <Route exact path={'/login'} component={LoginForm}></Route> */}
              <Route exact path={'/account'} component={LoggedIn}></Route>
              <Route exact path={'/signup'} component={SignUpForm}></Route>
              <Route exact path={'/new-request'} component={RequestForm}></Route>
              <Route exact path={'/add-devices/:id'} component={UserRequestDevices}></Route>
              <Route exact path={'/edit-request/:id'} component={EditRequest}></Route>
              <Route exact path={'/admin'} component={AdminConsole}></Route>
              <Route exact path={'/admin/new-requests'} component={NewRequests}></Route>
              <Route exact path={'/admin/analytics'} component={Stats}></Route>
              <Route exact path={'/admin/users'} component={ManageUsers}></Route>
              <Route exact path={'/admin/view-request/:id'} component={SingleRequest}></Route>
              <Route exact path={'/admin/archive'} component={RequestArchive}></Route>
              <Route exact path={'/admin/stats/devices'} component={DeviceStats}></Route>
              <Route exact path={'/admin/stats/requests'} component={RequestStats}></Route>
              <Route exact path={'/admin/add-user'} component={addUserAdminForm}></Route>
              <Route exact path={'/profile'} component={Profile}></Route>
              <Route exact path={'/change-password'} component={ChangePassword}></Route>
              <Route exact path={'/signup-complete'} component={SignUpComplete}></Route>
              <Route exact path={'/edit-profile'} component={EditProfile}></Route>
              <Redirect to='/' />
            </Switch>
            <Route render={() => <Footer />} />
          </ThemeProvider>
        </HashRouter >
      </Provider>
    )
  }
}

const app = document.querySelector('#app');

ReactDom.render(
  <App/>,
  app,
  ()=>console.log('app rendered'))
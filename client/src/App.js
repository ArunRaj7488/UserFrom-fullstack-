import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserSignUpForm from './componants/user/userSingUpForm';
import UserMangement from './Screens/UserManagement';
import { Route, Switch} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div >
       <Switch>
          <Route path="/user-signup" component={UserSignUpForm}></Route>
          <Route path="/" component={UserMangement}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

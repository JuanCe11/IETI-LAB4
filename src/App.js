import React, { Component } from 'react';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Login from './components/Login';
import TodoApp from './components/TodoApp';
import PrivateRoute from './components/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/" component={TodoApp} />
        </Switch>
      </Router >
    );
  }
}

export default App;

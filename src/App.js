import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/login/login'
import Home from './views/home/home'

import {
  HashRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/home" component={Home} />
        <Redirect to='/home' />
      </Router>
    )
  }
}

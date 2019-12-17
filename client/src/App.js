import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  render() {
    let routes = (
      <Switch>{/* <Route exact path='/' component={Login} /> */}</Switch>
    );
    return (
      <>
        <Router>{routes}</Router>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // action goes here
    },
    dispatch
  );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

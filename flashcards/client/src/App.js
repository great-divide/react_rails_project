import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './containers/login'
import Signup from './containers/signup'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;

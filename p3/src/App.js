import React, { Component } from 'react';
import Login from "./components/LogIn/LogIn"
import Register from "./components/Register/Register"

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        <Register />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import Login from "./components/Login/Login"
import Header from "./components/Header/Header"
import BottomNavbar from "./components/Navbar/BottomNavbar"
import TopNavbar from "./components/Navbar/TopNavbar"

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <TopNavbar />
      <Header />
      <BottomNavbar />
      </React.Fragment>
    );
  }
}


export default App;

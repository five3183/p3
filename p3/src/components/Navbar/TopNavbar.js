import React from 'react';
import './topNavbar.css';

const TopNavbar = (props) => {
    return (
        <nav className="navbar bg-dark navbar-dark flex-row-reverse">

  <a className="nav navbar-nav navbar-logo mx-auto">Personal Prescription Planner</a>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Medication</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Diet</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Health</a>
      </li> 
    </ul>
  </div> 
</nav>
    );
};

export default TopNavbar;
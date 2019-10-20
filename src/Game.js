import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Icon } from 'antd';
import MapApp from './containers/MapApp';
import Login from './login/home';
import Register from './register/home';
import './css/Game.css';

export default function Game() {
  return (
    <Router>
      <div className="sidenav">
        <ul>
          <li>
            <Link to="/">
              <Icon className="icon" type="user" /> LÊ HƯNG
            </Link>
            <hr/>
          </li>
          <br />
          <li>
            <Link to="/">
              <Icon className="icon" type="home" /> Home
            </Link>
          </li>
          <br />
          <li>
            <Link to="/login">
              <Icon className="icon" type="login" /> Login
            </Link>
          </li>
          <br />
          <li>
            <Link to="/register">
              <Icon className="icon" type="select" /> Register
            </Link>
          </li>
          <br />
          <li>
            <Link to="/logout">
              <Icon className="icon" type="logout" /> Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="main">
        <div className="div70">
          {/* 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <MapApp />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

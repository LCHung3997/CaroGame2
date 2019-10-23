import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Icon,Button } from 'antd';
import { connect } from 'react-redux';
import MapApp from './containers/MapApp';
import MapRegister from './containers/MapRegister';
import './css/Game.css';
import MapLogin from './containers/MapLogin';
import { getProfileFetch, restartGame } from './actions/indexAction';

class Game extends React.PureComponent {
  componentDidMount = () => {
    const { getProfileFetchs } = this.props;
    getProfileFetchs();
  };

  handleClick = () => {
    const {logoutAccount} = this.props
    logoutAccount();    
    localStorage.clear();
    

  }

  render() {
    // localStorage.clear();
    const tokenn = localStorage.token;
    const { state } = this.props;
    const { currentUser } = state;
    if (tokenn != null) {
      // const deToken = jwt.decode(tokens);
      // const { currentUser } = state;
      return (
        <Router>
          <div className="sidenav">
            <ul>
              {currentUser.Username ? (
                <li className='user'>
                  <Link to>
                    <Icon className="icon" type="user" /> {currentUser.Username}
                  </Link>
                  
                </li>
              ) : null}
              <br />
              <li>
                <Link to="/home">
                  <Icon className="icon" type="home" /> Home
                </Link>
              </li>
              {/* <br />
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
              </li> */}
              <br />
              <li>
                <Link to="/login">
                  <Icon className="icon" type="logout" /><Button className="btnn" onClick = {this.handleClick}> <b>Logout</b></Button>
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
                  <MapLogin />
                </Route>
                <Route path="/register">
                  <MapRegister />
                </Route>                
                {tokenn ? (
                  <Route path="/home">
                    <MapApp />
                  </Route>
                ) : (
                  <Redirect to="/login"/>
                )}
              </Switch>
            </div>
          </div>
        </Router>
      );
    }
    return (
      <Router>
        <div className="sidenav">
          <ul>
      <li>
                <h3 className='title'>CARO VN</h3>
              </li>
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
          </ul>
        </div>

        <div className="main">
          <div className="div70">
            {/* 
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login">
                <MapLogin />
              </Route>
              <Route path="/register">
                <MapRegister />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapRouterStateToProps = state => ({
  state: state.tickSquare
});

const mapDispatchToProps = dispatch => ({
  getProfileFetchs: () => dispatch(getProfileFetch()),
  logoutAccount: () => dispatch(restartGame()),

});

export default connect(
  mapRouterStateToProps,
  mapDispatchToProps
)(Game);

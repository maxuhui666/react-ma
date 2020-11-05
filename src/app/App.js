import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './App.scss';
import Home from '../pages/Home';
import Login from '../pages/Login';

/**
 * App组件
 */
class App extends Component {
  /**
   * 渲染
   * @return {JSX.Element}
   */
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Redirect from={'/'} to={'/home'}/>
          <Route path={'/home'} exact>
            <Home/>
          </Route>
          <Route path={'/login'} exact>
            <Login/>
          </Route>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;

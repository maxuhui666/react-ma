import React, {Component, Fragment} from 'react';
import Home from '../pages/Home';
import './App.scss';

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
        <Home/>
      </Fragment>
    );
  }
}

export default App;

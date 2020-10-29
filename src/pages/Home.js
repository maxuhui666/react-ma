import React, {Component, Fragment} from 'react';
import {Button} from 'antd';
import {AlipayCircleOutlined} from '@ant-design/icons';
import './Home.scss';

/**
 * Home组件
 */
class Home extends Component {
  /**
   * 渲染
   * @return {JSX.Element}
   */
  render() {
    return (
      <Fragment>
        <div>
          <p>Hello World</p>
          <AlipayCircleOutlined />
          <Button type={'primary'}>确定</Button>
        </div>
      </Fragment>
    );
  }
}

export default Home;

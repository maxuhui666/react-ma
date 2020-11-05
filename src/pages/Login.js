import React, {Component, Fragment} from 'react';
import {Button, Col, Row} from 'antd';
import {Link} from 'react-router-dom';

/**
 * 登录组件
 */
class Login extends Component {
  /**
   * 构造函数
   * @param {Readonly} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: '登录',
    };
  }

  /**
   * 渲染UI
   * @return {JSX.Element}
   */
  render() {
    return (
      <Fragment>
        <div>
          <p>登录页面</p>
          <Row>
            <Col span={4}>
              <Link to={'/home'}>
                <Button type={'primary'}>去首页</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Login;

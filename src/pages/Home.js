import React, {Component, Fragment} from 'react';
import {Button, Col, Row} from 'antd';
import './Home.scss';
import {Link} from 'react-router-dom';

/**
 * Home组件
 */
class Home extends Component {
  /**
   * 构造函数
   * @param {Readonly} props
   */
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello World',
    };
    this.reverseTitle = this.reverseTitle.bind(this);
    this.upset = this.upset.bind(this);
  }

  /**
   * 反转字符串
   */
  reverseTitle() {
    const {title} = this.state;
    const reverse = title.split('').reverse().join('');
    this.setState({
      title: reverse,
    }, () => {
      console.log('SUCCESS');
    });
  }

  /**
   * 打乱
   */
  upset() {
    let {title} = this.state;
    title = title.split('').sort(function() {
      return Math.random() - 0.5;
    }).join('');
    this.setState({
      title: title,
    }, () => {
      console.log('SUCCESS');
    });
  }

  /**
   * 渲染
   * @return {JSX.Element}
   */
  render() {
    const {title} = this.state;
    return (
      <Fragment>
        <div>
          <Row>
            <Col span={6}>
              <p>{title}</p>
            </Col>
          </Row>
          <Row>
            <Col span={2}>
              <Button type={'primary'} onClick={this.reverseTitle}>
                反转
              </Button>
            </Col>
            <Col span={4}>
              <Button type={'primary'} onClick={this.upset}>
                打乱
              </Button>
            </Col>
            <Col span={4}>
              <Link to={'/login'}>
                <Button type={'primary'}>
                  去登录页面
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Home;

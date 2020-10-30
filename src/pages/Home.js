import React, {Component, Fragment} from 'react';
import {Button, Col, Row} from 'antd';
import './Home.scss';
import http from '../http/http';
import {projectInfo} from '../http/Api';

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
  }

  /**
   * 反转字符串
   */
  reverseTitle() {
    const title = this.state.title;
    const reverse = title.split('').reverse().join('');
    this.setState({
      title: reverse,
    }, () => {
      console.log('SUCCESS');
    });
  }

  /**
   * 获取项目列表
   */
  getProjectList() {
    http.get(projectInfo.list,
        {},
    ).then((response) => {
      console.log(response);
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
              <Button type={'primary'} onClick={this.getProjectList}>
                发送
              </Button>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type={'primary'} onClick={this.reverseTitle}>确定</Button>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Home;

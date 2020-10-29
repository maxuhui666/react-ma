import React, {Component, Fragment} from 'react';
import {Button, Col, Row} from 'antd';
import {AlipayCircleOutlined} from '@ant-design/icons';
import './Home.scss';

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
   * 渲染
   * @return {JSX.Element}
   */
  render() {
    const {title} = this.state;
    return (
      <Fragment>
        <div>
          <Row>
            <Col span={8}>
              <p>{title}</p>
            </Col>
            <Col>
              <AlipayCircleOutlined/>
            </Col>
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

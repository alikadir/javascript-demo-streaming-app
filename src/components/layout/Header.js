import React from 'react';
import { Row, Col, Button, Space } from 'antd';
import LoginWidget from '../auth/LoginWidget';
import Content from './Content';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <Content isPage={false}>
        <Row justify="space-between">
          <Col>
            <Link to="/" alt="Demo" className="header-title">
              DEMO Streaming
            </Link>
          </Col>
          <Col>
            <Space size={25}>
              <LoginWidget />
              <Button ghost className="header-trial-button">
                Start your free trial
              </Button>
            </Space>
          </Col>
        </Row>
      </Content>
    </header>
  );
}

import React from 'react';
import { Row, Col, Spin } from 'antd';

export default function Loading(props) {
  return (
    <Row justify="center" align="middle">
      <Col>
        <Spin size="large" />
      </Col>
    </Row>
  );
}

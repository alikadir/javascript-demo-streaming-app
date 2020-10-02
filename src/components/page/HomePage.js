import React from 'react';
import { Row, Col, Space } from 'antd';
import Card from '../common/Card';

export default function HomePage(props) {
  return (
    <main>
      <Row justify="center" className="home-page-space">
        <Col>
          <Space size={40}>
            <Card
              isLarge={true}
              direction="/series"
              title="Popular Series"
              imageUrl="/assets/series.jpg"
            />
            <Card
              isLarge={true}
              direction="/movies"
              title="Popular Movies"
              imageUrl="/assets/movies.jpg"
            />
          </Space>
        </Col>
      </Row>
    </main>
  );
}

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Card from './Card';

const CardList = props => (
  <Row gutter={[25, 45]} justify="center" align="middle">
    {props.list &&
      props.list.map(m => (
        <Col key={m.title}>
          <Card
            isLarge={false}
            title={m.title}
            direction={`/content/${m.title.length}`}
            imageUrl={m.images['Poster Art'].url}>
            {m.title}
          </Card>
        </Col>
      ))}
  </Row>
);

CardList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CardList;

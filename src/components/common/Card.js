import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = props => {
  return (
    <Link to={props.direction} alt={props.title} data-testid="card-id">
      <div className={props.isLarge ? 'card card-large' : 'card card-small'}>
        <img
          className="card-placeholder"
          src="/assets/placeholder.jpg"
          alt="placeholder"
        />
        <div
          className="card-image"
          style={{ backgroundImage: 'url(' + props.imageUrl + ')' }}
        />
        <div className="card-title">
          <span>{props.title}</span>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  direction: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  isLarge: PropTypes.bool.isRequired,
};
export default Card;

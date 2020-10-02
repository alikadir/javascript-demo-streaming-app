import React from 'react';
import PropTypes from 'prop-types';

const PageTitle = props => {
  return <h1 className="page-title">{props.title}</h1>;
};
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default PageTitle;

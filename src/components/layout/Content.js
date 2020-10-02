import React from 'react';

import PropTypes from 'prop-types';

const Content = props => {
  return (
    <div
      className={props.isPage ? 'content-container-page' : 'content-container'}>
      {props.children}
    </div>
  );
};
Content.propTypes = {
  isPage: PropTypes.bool.isRequired,
};
export default Content;

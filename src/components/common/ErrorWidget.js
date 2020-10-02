import React from 'react';
import PropTypes from 'prop-types';
import { log } from '../../services/logService';
import { Result, Button } from 'antd';
import Content from '../layout/Content';
import { useHistory } from 'react-router-dom';

const ErrorWidget = props => {
  log(props.error, window.location.href, navigator.userAgent);
  const history = useHistory();

  return (
    <Content isPage={false}>
      <Result
        status="500"
        title="Oops!"
        subTitle="Something went wrong."
        extra={
          <Button onClick={() => history.push('/')} type="primary">
            Back Home
          </Button>
        }
      />
    </Content>
  );
};

ErrorWidget.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

export default ErrorWidget;

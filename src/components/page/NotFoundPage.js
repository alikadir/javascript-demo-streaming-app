import React from 'react';
import { Result, Button } from 'antd';
import { withRouter } from 'react-router-dom';

export default withRouter(props => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button
        type="primary"
        onClick={e => {
          props.history.goBack();
        }}>
        Back Home
      </Button>
    }
  />
));

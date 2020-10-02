import React from 'react';
import ErrorWidget from '../common/ErrorWidget';

export default class ErrorHandler extends React.Component {
  state = { error: null };

  componentDidCatch(error, errorInfo) {
    this.setState({ error: error });
  }

  render() {
    if (this.state.error) {
      return <ErrorWidget error={this.state.error} />;
    }
    return this.props.children;
  }
}

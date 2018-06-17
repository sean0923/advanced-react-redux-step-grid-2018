import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class EnhancedComponent extends Component {
    componentDidMount() {
      if (!this.props.auth.jwtToken) {
        this.props.history.push('/');
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.auth.jwtToken) {
        nextProps.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth,
    };
  };

  return connect(mapStateToProps)(EnhancedComponent);
};

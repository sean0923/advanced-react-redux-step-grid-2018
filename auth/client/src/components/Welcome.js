import React from 'react';
import { connect } from 'react-redux';

const Welcome = props => {
  if (props.auth.jwtToken && props.auth.jwtToken.length > 0) {
    return (
      <div>
        <div>Welcome</div>
      </div>
    );
  }

  return (
    <div>
      <div>Welcome Please Sign in or Sign up to see feature</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Welcome);

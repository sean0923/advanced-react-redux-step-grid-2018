import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

class Signout extends Component {
  componentDidMount() {
    this.props.removeJwtToken();
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div>
        <div>signout</div>
      </div>
    );
  }
}

export default connect(null, actions)(Signout);

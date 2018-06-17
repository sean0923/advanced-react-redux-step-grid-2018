import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/actions';

class CommonForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChange = (e, stateProp) => {
    this.setState({ [stateProp]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.getJwtTockenFromServer(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <fieldset>
          <label>Email: </label>
          <input
            type="text"
            onChange={e => this.handleOnChange(e, 'email')}
            value={this.state.email}
          />
        </fieldset>
        <fieldset>
          <label>Password: </label>
          <input
            type="password"
            onChange={e => this.handleOnChange(e, 'password')}
            value={this.state.password}
          />
        </fieldset>
        <div>
          <button> Cancel </button>
          <button type="Submit"> Submit </button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(CommonForm);

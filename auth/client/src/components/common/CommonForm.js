import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../actions/actions';

import ErrorMessage from './ErrorMessage';

class CommonForm extends Component {
  state = {
    email: '',
    password: '',
    errorrMessageFromServer: '',
  };

  handleOnChange = (e, stateProp) => {
    this.setState({ [stateProp]: e.target.value });
  };

  handleOnSubmit = async e => {
    e.preventDefault();
    const isSuccess = await this.props.getJwtTockenFromServer(this.state, this.props.formType);

    if (isSuccess) {
      this.setState({
        email: '',
        password: '',
        errorrMessageFromServer: '',
      });
      this.props.history.push('/feature');
    } else {
      console.log('this.props.auth.errorMessage: ', this.props.auth.errorMessage);
      this.setState({ errorrMessageFromServer: this.props.auth.errorMessage });
    }
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
          {this.state.errorrMessageFromServer.length > 0 && (
            <ErrorMessage text={this.state.errorrMessageFromServer} />
          )}
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default compose(withRouter, connect(mapStateToProps, actions))(CommonForm);

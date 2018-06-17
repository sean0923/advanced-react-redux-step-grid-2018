import React, { Component } from 'react';

class SignInAndOut extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return (
      <form>
        <fieldset>
          <label>Email: </label>
          <input type="text" value={this.state.email} />
        </fieldset>
        <fieldset>
          <label>Password: </label>
          <input type="text" value={this.state.email} />
        </fieldset>
        <div>
          <button> Cancel </button>
          <button type="Submit"> Submit </button>
        </div>
      </form>
    );
  }
}

export default SignInAndOut;

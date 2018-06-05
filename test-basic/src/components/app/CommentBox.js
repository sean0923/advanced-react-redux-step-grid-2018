import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    userInput: '',
  };

  handleOnChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ userInput: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Comment</h4>
        <textarea value={this.state.userInput} onChange={this.handleOnChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;

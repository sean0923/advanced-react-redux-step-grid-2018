import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveComment } from '../../actions/actions';

class CommentBox extends Component {
  state = {
    userInput: '',
  };

  handleOnChange = e => {
    this.setState({ userInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveComment(this.state.userInput);
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

const mapStateToProps = state => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, { saveComment })(CommentBox);

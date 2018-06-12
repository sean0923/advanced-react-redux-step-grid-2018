import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveComment, getCommentsFromJsonPlaceholder } from '../../actions/actions';

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
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h2>Box Route</h2>
          <textarea value={this.state.userInput} onChange={this.handleOnChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className='fetch-btn' onClick={this.props.getCommentsFromJsonPlaceholder}>
          get comments from json placeholder
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, { saveComment, getCommentsFromJsonPlaceholder })(
  CommentBox
);

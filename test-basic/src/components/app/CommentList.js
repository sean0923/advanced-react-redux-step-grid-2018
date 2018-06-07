import React from 'react';
import { connect } from 'react-redux';

const CommentList = props => {
  const renderList = () => {
    
    // console.log('props.comments: ', props.comments);
    return (
      <ul>
        {props.comments.map((comment, idx) => {
          return <li key={idx}> {comment}</li>;
        })}
      </ul>
    );
  };
  
  return (
    <div>
      <div>CommentList</div>
      {renderList()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps)(CommentList);

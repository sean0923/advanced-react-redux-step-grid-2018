import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../../actions/actions';

const BtnStyle = styled.button`
  padding: .4rem 1rem;
  color: #fff;
  border: none;
  background-color: grey;
  border-radius: 3px;
  font-size: 20px;
`;

const SignInOutBtn = props => {
  if (props.auth) {
    return (
      <BtnStyle
        onClick={() => {
          props.changeAuth(false);
        }}
      >
        Sign Out
      </BtnStyle>
    );
  }
  return (
    <BtnStyle
      onClick={() => {
        props.changeAuth(true);
      }}
    >
      Sign In
    </BtnStyle>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(SignInOutBtn);

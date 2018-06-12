import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const BtnStyle = styled.button`
  padding: .4rem 1rem;
  color: #fff;
  border: none;
  background-color: grey;
  border-radius: 3px;
  font-size: 20px;
`;

const SignInOutBtn = ({ auth }) => {
  if (auth) {
    return <BtnStyle>Sign Out</BtnStyle>;
  }
  return <BtnStyle>Sign In</BtnStyle>;
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(SignInOutBtn);

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Wrapper = styled.div`
  text-decoration: none;
  padding: .4rem 1rem;
  background-color: lightblue;
  border-radius: 3px;
`;

const NavItem = ({ linkTo, text, auth }) => {
  const hasToken = auth.jwtToken && auth.jwtToken.length > 0;

  if (hasToken) {
    if (linkTo === '/signin' || linkTo === '/signup') {
      return null;
    }
  } else {
    if (linkTo === '/feature' || linkTo === '/signout') {
      return null;
    }
  }
  return (
    <Link to={linkTo}>
      <Wrapper>{text}</Wrapper>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(NavItem);

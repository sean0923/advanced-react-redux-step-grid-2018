import React, { Component } from 'react';
import styled from 'styled-components';

import NavItem from './header/NavItem';

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  & > * {
    margin-right: 20px;
  }
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <NavItem linkTo={'/signup'} text="Sgin Up" />
        <NavItem linkTo={'/signin'} text="Sign In" />
        <NavItem linkTo={'/signout'} text="Sign Out" />
        <NavItem linkTo={'/feature'} text="Feature" />
      </Wrapper>
    );
  }
}

export default Header;

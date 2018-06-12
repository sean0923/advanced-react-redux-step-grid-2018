import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignInOutBtn from './navbar/SignInOutBtn';

const StyledUl = styled.ul`
  font-size: 20px;
  & > * {
    display: inline-block;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const Navbar = () => {
  return (
    <div>
      <StyledUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="box">Box</Link>
        </li>
        <li>
          <SignInOutBtn />
        </li>
      </StyledUl>
    </div>
  );
};

export default Navbar;

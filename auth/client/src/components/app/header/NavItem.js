import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  text-decoration: none;
  padding: .4rem 1rem;
  background-color: lightblue;
  border-radius: 3px;
`;

const NavItem = ({ linkTo, text }) => {
  return (
    <Link to={linkTo}>
      <Wrapper>{text}</Wrapper>
    </Link>
  );
};

export default NavItem;

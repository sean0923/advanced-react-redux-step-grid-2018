import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: red;
  padding: .4rem 1rem;
  border: 1px solid red;
`;

const ErrorMessage = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

export default ErrorMessage;

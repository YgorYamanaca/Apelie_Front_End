import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
  background-color: black;
`;

export default function Home() {
  return <Title>My page</Title>;
}

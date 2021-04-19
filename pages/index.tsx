import React from 'react';
import styled from 'styled-components';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import NextLink from 'next/link';

const Wrapper = styled.h1`
  color: red;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;

const Home: React.FC = () => (
  <Wrapper>
    <NextLink href="/login">
      Login
    </NextLink>
    <NextLink href="/subscribe">
      Subscribe
    </NextLink>
  </Wrapper>
);

export default apeliePageHOC(Home, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Home',
    },
  },
});

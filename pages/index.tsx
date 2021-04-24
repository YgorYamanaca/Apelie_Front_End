import React from 'react';
import styled from 'styled-components';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import NextLink from 'next/link';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';

const Wrapper = styled.h1`
  color: red;
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;

const Home: React.FC = () => (
  <Wrapper>
    <NextLink href={ApeliePageAlias.Login}>
      Login
    </NextLink>
    <NextLink href={ApeliePageAlias.Subscribe}>
      Subscribe
    </NextLink>
  </Wrapper>
);

export default apeliePageHOC(Home, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Home',
    },
    PAGEProps: {
      template: 'CUSTOM',
    },
  },
});

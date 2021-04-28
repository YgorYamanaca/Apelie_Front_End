import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import HomeScreen from '@/screens/HomeScreen';

const Home: React.FC = () => (
  <>
    <HomeScreen />
  </>
);

export default apeliePageHOC(Home, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Home',
      url: ApeliePageAlias.Home,
    },
    PAGEProps: {
      template: 'CUSTOM',
    },
  },
});

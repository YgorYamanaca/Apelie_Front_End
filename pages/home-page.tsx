import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import MainPageScreen from '@/screens/MainPageScreen';

const MainPage: React.FC = () => (
  <>
    <MainPageScreen />
  </>
);

export default apeliePageHOC(MainPage, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Home Page',
      url: ApeliePageAlias.MainPage,
    },
    PAGEProps: {
      template: 'COMMON',
    },
  },
});

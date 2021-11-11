import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import MainPageScreen from '@/screens/MainPageScreen';

const MainPage: React.FC = () => (
  <>
    <MainPageScreen />
  </>
);

export default apeliePageHOC(MainPage, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Página Principal - Apelie',
    },
    PAGEProps: {
      template: 'COMMON',
    },
  },
});

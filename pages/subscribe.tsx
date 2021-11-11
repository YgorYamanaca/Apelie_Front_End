import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import SubscribeScreen from '@/screens/SubscribeScreen';

const Subscribe: React.FC = () => (
  <>
    <SubscribeScreen />
  </>
);

export default apeliePageHOC(Subscribe, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Página de inscrição - Apelie',
    },
    PAGEProps: {
      template: 'DEFAULT',
    },
  },
});

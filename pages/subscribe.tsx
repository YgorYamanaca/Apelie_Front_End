import React from 'react';
import SubscribeScreen from '@/screens/SubscribeScreen';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';

const Subscribe: React.FC = () => (
  <>
    <SubscribeScreen />
  </>
);

export default apeliePageHOC(Subscribe, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Subscribe',
    },
    PAGEProps: {
      template: 'DEFAULT',
    },
  },
});

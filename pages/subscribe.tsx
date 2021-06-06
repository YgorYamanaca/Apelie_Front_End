import React from 'react';
import SubscribeScreen from '@/screens/SubscribeScreen';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';

const Subscribe: React.FC = () => (
  <>
    <SubscribeScreen />
  </>
);

export default apeliePageHOC(Subscribe, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Página de inscrição - Apelie',
      url: ApeliePageAlias.Subscribe,
    },
    PAGEProps: {
      template: 'DEFAULT',
    },
  },
});

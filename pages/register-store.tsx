import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import MainPageScreen from '@/screens/MainPageScreen';

const RegisterStorePage: React.FC = () => (
  <>
    <MainPageScreen />
  </>
);

export default apeliePageHOC(RegisterStorePage, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Cadastro de Loja - Apelie',
      url: ApeliePageAlias.RegisterStorePage,
    },
    PAGEProps: {
      template: 'COMMON',
    },
  },
});

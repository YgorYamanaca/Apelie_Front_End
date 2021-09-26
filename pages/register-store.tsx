import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import RegisterStoreScreen from '@/screens/RegisterStoreScreen';

const RegisterStorePage: React.FC = () => (
  <>
    <RegisterStoreScreen />
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

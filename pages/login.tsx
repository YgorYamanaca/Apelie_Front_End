import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import LoginScreen from '@/screens/LoginScreen';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';

const Login: React.FC = () => (
  <>
    <LoginScreen />
  </>
);

export default apeliePageHOC(Login, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Login',
      url: ApeliePageAlias.Login,
    },
    PAGEProps: {
      template: 'DEFAULT',
    },
  },
});

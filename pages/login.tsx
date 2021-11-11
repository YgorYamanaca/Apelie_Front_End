import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import LoginScreen from '@/screens/LoginScreen';

const Login: React.FC = () => (
  <>
    <LoginScreen />
  </>
);

export default apeliePageHOC(Login, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Página de login - Apelie',
    },
    PAGEProps: {
      template: 'DEFAULT',
    },
  },
});

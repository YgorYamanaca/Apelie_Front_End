import React, { useContext, useLayoutEffect } from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import router from 'next/router';
import RegisterStoreScreen from '@/screens/RegisterStoreScreen';
import { UserContext } from '@/stores/UserManager';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';

const RegisterStorePage: React.FC = () => {
  const { loggedUser } = useContext(UserContext);

  useLayoutEffect(() => {
    if (loggedUser && loggedUser.hasStore) {
      router.push(ApeliePageAlias.MainPage);
    }
  });

  return (
    <>
      <RegisterStoreScreen />
    </>
  );
};

export default apeliePageHOC(RegisterStorePage, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Cadastro de Loja - Apelie',
    },
    PAGEProps: {
      template: 'COMMON',
    },
  },
});

import React, { useLayoutEffect } from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import HomeScreen from '@/screens/HomeScreen';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const route = useRouter();
  useLayoutEffect(() => {
    const userIsLogged = false;
    if (userIsLogged) {
      route.push(ApeliePageAlias.Login);
    }
  }, []);

  return (
    <>
      <HomeScreen />
    </>
  );
};

export default apeliePageHOC(Home, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Seja muito bem vinde ao Apelie!',
      url: ApeliePageAlias.Home,
    },
    PAGEProps: {
      template: 'CUSTOM',
    },
  },
});

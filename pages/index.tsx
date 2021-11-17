import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import HomeScreen from '@/screens/HomeScreen';
import { IStore } from '@/types/interfaces/interface-store';

interface IHome {
  stores: IStore[];
}

const Home: React.FC<IHome> = () => (
  <>
    <HomeScreen />
  </>
);

export default apeliePageHOC(Home, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Seja muito bem vinde ao Apelie!',
    },
    PAGEProps: {
      template: 'CUSTOM',
    },
  },
});

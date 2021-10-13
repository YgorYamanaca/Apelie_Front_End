import React from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import HomeScreen from '@/screens/HomeScreen';
import { IStore } from '@/types/interfaces/interface-store';
import ApiRequester from '@/services/apiRequester';

export const getStaticProps: GetStaticProps = async () => {
  const response = await ApiRequester.apelie
    .get('/stores')
    .then((serverResponse) => serverResponse.data)
    .catch(() => []);
  return {
    props: {
      stores: response,
    },
  };
};

interface IHome {
  stores: IStore[];
}

const Home: React.FC<IHome> = ({
  stores,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <HomeScreen stores={[...stores, ...stores, ...stores, ...stores, ...stores]} />
  </>
);

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

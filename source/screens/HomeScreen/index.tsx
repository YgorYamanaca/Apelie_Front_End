import React, { useState, useMemo, ReactNode } from 'react';
import Button from '@/components/commons/Button';
import Carousel from '@/components/commons/Carousel';
import TextBase from '@/components/commons/TextBase';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import { useRouter } from 'next/router';
import IStore from '@/types/interfaces/interface-store';
import storeData from '@/utils/data-test';
import Store from '@/components/commons/Store';
import HomeBox from './styles';

const HomeScreen: React.FC = () => {
  const [spotlightStores] = useState<IStore[]>(storeData);
  const router = useRouter();

  const spotlightStoresElements: ReactNode[] = useMemo(() => spotlightStores.map((store, index) => (
    <Store key={`store-${index + 1}`} id={`store-${index + 1}`} store={store} />
  )), [spotlightStores]);

  return (
    <HomeBox.Container>
      <HomeBox.ImageBox>
        <HomeBox.ImageBoxHeader>
          <Button ghost buttonColor="primary" onClick={() => router.push(ApeliePageAlias.Subscribe)}>
            Sobre
          </Button>
          <Button ghost buttonColor="primary" onClick={() => router.push(ApeliePageAlias.Subscribe)}>
            Crie a sua conta
          </Button>
          <Button ghost buttonColor="primary" onClick={() => router.push(ApeliePageAlias.Login)}>
            Entrar
          </Button>
        </HomeBox.ImageBoxHeader>
        <HomeBox.ImageBoxContent>
          <img
            src="/images/Home/Home-Animated-Image1.svg"
            alt="ApelieHomeImg1"
            height={350}
            width={350}
          />
          <HomeBox.ImageBoxCenterContent>
            <div>
              <img height={55} width={200} src="https://placehold.co/200x55?text=Logo" alt="ApelieLogo" />
            </div>
            <TextBase variant="title" tag="h1">
              Fique mais próximo do seu cliente
            </TextBase>
            <TextBase variant="paragraph1">
              No Apelie oferecemos um ambiente onde você encontra os mais variados tipos de produtos
              artesanais. Aqui você pode vender, comprar e conhcer novos produtos de qualidade.
            </TextBase>
          </HomeBox.ImageBoxCenterContent>
          <img
            src="/images/Home/Home-Animated-Image2.svg"
            alt="ApelieHomeImg2"
            height={350}
            width={350}
          />
        </HomeBox.ImageBoxContent>
      </HomeBox.ImageBox>
      <HomeBox.StoresBox>
        <Carousel elementsList={spotlightStoresElements} />
      </HomeBox.StoresBox>
    </HomeBox.Container>
  );
};

export default HomeScreen;

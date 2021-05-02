import React, { useState, useMemo, ReactNode } from 'react';
import Button from '@/components/commons/Button';
import Carousel from '@/components/commons/Carousel';
import TextBase from '@/components/commons/TextBase';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import { useRouter } from 'next/router';
import IStore from '@/types/interfaces/interface-store';
import storeData from '@/utils/data-test';
import HomeBox from './styles';

const HomeScreen: React.FC = () => {
  const [spotlightStores] = useState<IStore[]>(storeData);
  const router = useRouter();

  const spotlightStoresElements: ReactNode[] = useMemo(() => spotlightStores.map((store, index) => (
    <div
      className="store"
      key={`Store-${index + 1}`}
    >
      {store.title}
    </div>
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
          />
          <HomeBox.ImageBoxCenterContent>
            <div>
              <img src="https://placehold.co/200x55?text=Logo" alt="ApelieLogo" />
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

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from 'react-query';
import ApelieButton from '@/components/commons/ApelieButton';
import ApelieCarousel from '@/components/commons/ApelieCarousel';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import ApelieStore from '@/components/commons/ApelieStore';
import HomeBox from './styles';
import { getStore } from '@/services/store';
import { IStore } from '@/types/interfaces/interface-store';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';

const HomeScreen: React.FC = () => {
  const stores = useQuery('getStore', getStore, {
    select: (data) => (data?.data as IStore[])?.map((store, index) => (
      <ApelieStore key={`store-${index + 1}`} store={store} />
    )),
  });
  const router = useRouter();

  return (
    <HomeBox.Container>
      <HomeBox.ImageBox>
        <HomeBox.ImageBoxHeader>
          <ApelieButton
            textVariant="subTitle"
            ghost
            buttonColor="primary"
            onClick={() => router.push(ApeliePageAlias.Subscribe)}
          >
            Crie a sua conta
          </ApelieButton>
          <ApelieButton
            textVariant="subTitle"
            ghost
            buttonColor="primary"
            onClick={() => router.push(ApeliePageAlias.Login)}
          >
            Entrar
          </ApelieButton>
        </HomeBox.ImageBoxHeader>
        <HomeBox.ImageBoxContent>
          <Image
            src="/images/Home/Home-Animated-Image1.svg"
            alt="ApelieHomeImg1"
            height={350}
            width={350}
          />
          <HomeBox.ImageBoxCenterContent>
            <div>
              <Image
                height={100}
                width={200}
                src="/images/Apelie/logo.png"
                alt="ApelieLogo"
              />
            </div>
            <ApelieTextBase variant="title" tag="h1">
              Fique mais próximo do seu cliente
            </ApelieTextBase>
            <ApelieTextBase variant="paragraph1" tag="h2">
              No Apelie oferecemos um ambiente onde você encontra os mais
              variados tipos de produtos artesanais. Aqui você pode vender,
              comprar e conhcer novos produtos de qualidade.
            </ApelieTextBase>
          </HomeBox.ImageBoxCenterContent>
          <Image
            src="/images/Home/Home-Animated-Image2.svg"
            alt="ApelieHomeImg2"
            height={350}
            width={350}
          />
        </HomeBox.ImageBoxContent>
      </HomeBox.ImageBox>
      <HomeBox.StoresBox>
        {stores.isSuccess
          ? (
            <ApelieCarousel
              id="Spot-Home-Page"
              elementsList={stores.data}
              breakPointsArray={
                [
                  { width: 0, itemsToShow: 1 },
                  { width: 450, itemsToShow: 2 },
                  { width: 960, itemsToShow: 3 },
                  { width: 1280, itemsToShow: 3 },
                  { width: 1920, itemsToShow: 3 },
                ]
              }
            />
          ) : <ApelieLoadingSpinner size="35px" />}
      </HomeBox.StoresBox>
    </HomeBox.Container>
  );
};

export default HomeScreen;

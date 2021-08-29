import React, { useMemo, ReactNode } from 'react';
import ApelieButton from '@/components/commons/ApelieButton';
import ApelieCarousel from '@/components/commons/ApelieCarousel';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import { useRouter } from 'next/router';
import IStore from '@/types/interfaces/interface-store';
import ApelieStore from '@/components/commons/ApelieStore';
import Image from 'next/image';
import HomeBox from './styles';

interface IHomeScreen {
  stores: IStore[];
}

const HomeScreen: React.FC<IHomeScreen> = ({ stores }) => {
  const router = useRouter();
  const spotlightStoresElements: ReactNode[] = useMemo(
    () => stores.map((store, index) => (
      <ApelieStore key={`store-${index + 1}`} store={store} />
    )),
    [stores],
  );

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
        <ApelieCarousel
          id="Spot-Home-Page"
          elementsList={spotlightStoresElements}
          baseSizes={300}
        />
      </HomeBox.StoresBox>
    </HomeBox.Container>
  );
};

export default HomeScreen;

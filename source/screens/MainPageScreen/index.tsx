import Carousel from '@/components/commons/ApelieCarousel';
import React, { useState, useMemo } from 'react';
import themeData from '@/utils/data-test';
import IApelieTheme from '@/types/interfaces/interface-apelie-theme';
import ApelieTheme from '@/components/commons/ApelieTheme';
import { useQuery } from 'react-query';
import { getStore } from '@/services/store';
import ApelieStore from '@/components/commons/ApelieStore';
import IStore from '@/types/interfaces/interface-store';
import ApelieFlexBox from '@/components/commons/ApelieFlexBox';
import MainPageScreenStyle from './styles';

const MainPageScreen: React.FC = () => {
  const { data } = useQuery('getStore', getStore);
  const [apelieThemes] = useState<IApelieTheme[]>(themeData);

  const mainPageStores = useMemo(
    () => (data && data.data.map((store: IStore, index: number) => <ApelieStore key={`ApelieStore-${index + 1}`} store={store} />)) || [],
    [data],
  );

  const themes = useMemo(() => apelieThemes.map((apelieTheme) => (
    <ApelieTheme theme={apelieTheme} />
  )), [apelieThemes]);

  return (
    <MainPageScreenStyle.Container>
      <MainPageScreenStyle.PageSection>
        <Carousel carouselTitle="Temas" elementsList={themes} baseSizes={250} />
      </MainPageScreenStyle.PageSection>
      <MainPageScreenStyle.PageSection>
        <Carousel carouselTitle="Destaques" elementsList={mainPageStores} baseSizes={250} />
      </MainPageScreenStyle.PageSection>
      <MainPageScreenStyle.PageSection>
        <ApelieFlexBox flexBoxTitle="Lojas">
          {mainPageStores.map((mainPageStore: Element) => mainPageStore)}
        </ApelieFlexBox>
      </MainPageScreenStyle.PageSection>
    </MainPageScreenStyle.Container>
  );
};

export default MainPageScreen;

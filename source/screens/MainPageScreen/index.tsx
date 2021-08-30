import React, { useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import themeData from '@/utils/data-test';
import IApelieTheme from '@/types/interfaces/interface-apelie-theme';
import ApelieTheme from '@/components/commons/ApelieTheme';
import { getStore } from '@/services/store';
import ApelieStore from '@/components/commons/ApelieStore';
import IStore from '@/types/interfaces/interface-store';
import ApelieFlexBox from '@/components/commons/ApelieFlexBox';
import ApelieCarousel from '@/components/commons/ApelieCarousel';
import MainPageScreenStyle from './styles';

const MainPageScreen: React.FC = () => {
  const { data } = useQuery('getStore', getStore);
  const [apelieThemes] = useState<IApelieTheme[]>(themeData);

  const mainPageStores = useMemo(
    () => (data
        && data.data.map((store: IStore, index: number) => (
          <ApelieStore key={`ApelieStore-${index + 1}`} store={store} />
        )))
      || [],
    [data],
  );

  const themes = useMemo(
    () => apelieThemes.map((apelieTheme) => <ApelieTheme theme={apelieTheme} />),
    [apelieThemes],
  );

  return (
    <MainPageScreenStyle.Container>
      <MainPageScreenStyle.PageSection>
        <ApelieCarousel
          id="Category"
          carouselTitle="Categorias"
          elementsList={themes}
          baseSizes={215}
        />
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

import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import ApelieTheme from '@/components/commons/ApelieTheme';
import { getStore, getStoreCategorys } from '@/services/store';
import ApelieStore from '@/components/commons/ApelieStore';
import { IStore } from '@/types/interfaces/interface-store';
import ApelieFlexBox from '@/components/commons/ApelieFlexBox';
import ApelieCarousel from '@/components/commons/ApelieCarousel';
import MainPageScreenStyle from './styles';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';

const MainPageScreen: React.FC = () => {
  const stores = useQuery('getStore', getStore);
  const categorys = useQuery('getStoreCategorys', getStoreCategorys);

  const mainPageStores = useMemo(
    () => (stores
        && stores.data?.data?.map((store: IStore, index: number) => (
          <ApelieStore key={`ApelieStore-${index + 1}`} store={store} />
        )))
      || [],
    [stores],
  );

  const mainPageCategorys = useMemo(
    () => (categorys
        && categorys.data?.data?.map((category: string, index: number) => (
          <ApelieTheme categoryTitle={category} key={`Categroy-${index + 1}`} />
        )))
      || [],
    [categorys],
  );

  return (
    <MainPageScreenStyle.Container>
      {stores.isSuccess && categorys.isSuccess ? (
        <>
          <MainPageScreenStyle.PageSection>
            <ApelieCarousel
              id="Category"
              carouselTitle="Categorias"
              elementsList={mainPageCategorys}
              breakPointsArray={[
                { width: 0, itemsToShow: 1 },
                { width: 450, itemsToShow: 2 },
                { width: 960, itemsToShow: 3 },
                { width: 1280, itemsToShow: 3 },
                { width: 1920, itemsToShow: 3 },
              ]}
            />
          </MainPageScreenStyle.PageSection>
          <MainPageScreenStyle.PageSection>
            <ApelieFlexBox flexBoxTitle="Lojas">
              {mainPageStores.map((mainPageStore: Element) => mainPageStore)}
            </ApelieFlexBox>
          </MainPageScreenStyle.PageSection>
        </>
      ) : (
        <ApelieLoadingSpinner size="35px" />
      )}
    </MainPageScreenStyle.Container>
  );
};

export default MainPageScreen;

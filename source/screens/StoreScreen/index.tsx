import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { IStore } from '@/types/interfaces/interface-store';
import StoreScreenStyle from './styles';
import ApelieStoreBackGround from '@/components/commons/ApelieStoreBackground';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApelieIconButton from '@/components/commons/ApelieIconButton';
import AddIcon from '@/assets/icons/AddIcon';
import ApelieProduct from '@/components/commons/ApelieProduct';
import ApelieModal from '@/components/commons/ApelieModal';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';
import ApelieStoreResume from '@/components/commons/ApelieStoreResume';

interface IStoreScreen {
    store: IStore;
    isUserStore?: boolean;
    isRequestLoading?: boolean;
}

const StoreScreen : React.FC<IStoreScreen> = ({
  store,
  isUserStore,
  isRequestLoading = true,
}) => {
  const [isAddPrductModalOpen, setIsAddPrductModalOpen] = useState(false);
  return (
    <StoreScreenStyle.Container>
      {isRequestLoading ? (
        <>
          <ApelieModal show={isAddPrductModalOpen} onClose={() => setIsAddPrductModalOpen(false)} />
          <ApelieStoreBackGround
            backgroundHeight="175px"
            store={store}
            logoSize="30"
            storeMediaSocialArray={
            _.keys(_.omitBy(_.pick(store, [
              'facebookAccount',
              'youtubeAccount',
              'twitterAccount',
              'instagramAccount',
            ]), _.isEmpty))
          }
            isLogoPositionBottom
            isEditable={isUserStore}
          />
          <StoreScreenStyle.StoreInfoContainer>
            <ApelieStoreResume store={store} isEditable={isUserStore} />
          </StoreScreenStyle.StoreInfoContainer>
          <StoreScreenStyle.ProductContainer>
            <div id="title-wrapper">
              <ApelieTextBase
                variant="title"
              >
                Catálogo
              </ApelieTextBase>
              {isUserStore && (
              <ApelieIconButton onClick={() => setIsAddPrductModalOpen(true)}>
                <AddIcon width="20" height="20" />
              </ApelieIconButton>
              )}
            </div>

            <div id="product-items-container">
              {store?.products.map((product, index) => (
                <ApelieProduct key={`${product.name + index}`} isEditable={isUserStore} product={product} />
              ))}
            </div>
          </StoreScreenStyle.ProductContainer>
        </>
      ) : <ApelieLoadingSpinner size="35px" />}
    </StoreScreenStyle.Container>
  );
};

export default StoreScreen;

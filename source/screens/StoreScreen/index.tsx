import React, { useState } from 'react';
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
import ApelieUserPhotoComponent from '@/components/commons/ApelieUserPhotoComponent';
import ApelieRating from '@/components/commons/ApelieRating';

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
            bannerUrl={store?.bannerUrl}
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
            <div id="store-info-container">
              <div id="store-detail-and-rating">

                <div id="store-owner-photo">
                  <ApelieUserPhotoComponent userPhotoUrl={store.owner.photoUrl} size={65} />
                </div>
                <div id="store-name-and-state">
                  <ApelieTextBase
                    variant="title"
                  >
                    {store.name}
                  </ApelieTextBase>
                  <ApelieTextBase
                    variant="subTitle"
                  >
                    {`${store.city} - ${store.state}`}
                  </ApelieTextBase>
                </div>
                <div id="store-rating">
                  <ApelieRating variant="title" rating={store.rating} />
                </div>
              </div>
              <p id="store-description">
                <ApelieTextBase variant="paragraph1">
                  {store.description}
                </ApelieTextBase>
              </p>
            </div>
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

import React from 'react';
import _ from 'lodash';
import { IStore } from '@/types/interfaces/interface-store';
import StoreScreenStyle from './styles';
import ApelieStoreBackGround from '@/components/commons/ApelieStoreBackground';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApelieIconButton from '@/components/commons/ApelieIconButton';
import AddIcon from '@/assets/icons/AddIcon';
import ApelieProduct from '@/components/commons/ApelieProduct';

interface IStoreScreen {
    store: IStore;
    isUserStore?: boolean;
}

const StoreScreen : React.FC<IStoreScreen> = ({
  store,
  isUserStore,
}) => (
  <StoreScreenStyle.Container>
    <ApelieStoreBackGround
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
    <StoreScreenStyle.StoreInfoContainer />
    <StoreScreenStyle.ProductContainer>
      <div id="title-wrapper">
        <ApelieTextBase
          variant="title"
        >
          Catálogo
        </ApelieTextBase>
        <ApelieIconButton>
          <AddIcon width="20" height="20" />
        </ApelieIconButton>
      </div>

      <div id="product-items-container">
        {store?.products.map((product, index) => (
          <ApelieProduct key={`${product.name + index}`} isEditable={isUserStore} product={product} />
        ))}
      </div>
    </StoreScreenStyle.ProductContainer>
  </StoreScreenStyle.Container>
);

export default StoreScreen;

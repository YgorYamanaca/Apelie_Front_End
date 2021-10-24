import React from 'react';
import _ from 'lodash';
import { IStore } from '@/types/interfaces/interface-store';
import StoreScreenStyle from './styles';
import ApelieStoreBackGround from '@/components/commons/ApelieStoreBackground';

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
  </StoreScreenStyle.Container>
);

export default StoreScreen;

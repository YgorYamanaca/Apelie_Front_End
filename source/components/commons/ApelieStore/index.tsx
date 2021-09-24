import React from 'react';
import _ from 'lodash';
import IStore from '@/types/interfaces/interface-store';
import ApelieRating from '../ApelieRating';
import ApelieTextBase from '../ApelieTextBase';
import ApelieUserPhotoComponent from '../ApelieUserPhotoComponent';
import StoreStyles from './styles';
import ApelieStoreBackGround from '../ApelieStoreBackground';

interface IStoreComponent {
  store: IStore;
}

const ApelieStore: React.FC<IStoreComponent> = ({ store }) => (
  <StoreStyles.Container id={`StoreStyles-Container-${store.storeId}`}>
    <ApelieStoreBackGround
      bannerUrl={store.bannerUrl}
      storeMediaSocialArray={
        _.keys(_.pick(store, [
          'facebookAccount',
          'youtubeAccount',
          'twitterAccount',
          'instagramAccount',
        ]))
      }
    />
    <StoreStyles.StoreOverflowContainer>
      <div>
        <StoreStyles.StorePhotoContainer imgUrl={store.logoUrl}>
          <StoreStyles.UserPhotoContainer>
            <ApelieUserPhotoComponent
              userPhotoUrl={
                  store.owner?.photoUrl || '/images/User/default-user-image.png'
                }
              size={50}
            />
          </StoreStyles.UserPhotoContainer>
        </StoreStyles.StorePhotoContainer>
      </div>
    </StoreStyles.StoreOverflowContainer>
    <StoreStyles.StoreAndScoreContainer>
      <StoreStyles.TextContainer>
        <ApelieTextBase id="apelie-name" variant="paragraph1">
          {store.name}
        </ApelieTextBase>
        <ApelieTextBase id="apelie-category" variant="smallException">
          {`${store.category}`}
        </ApelieTextBase>
        <ApelieTextBase id="apelie-address" variant="smallException">
          {`${store.city}, ${store.state}`}
        </ApelieTextBase>
      </StoreStyles.TextContainer>
      <div id={`Apelie-store-rating-${store.storeId}`}>
        <ApelieRating rating={store.rating ? store.rating : 0} />
      </div>
    </StoreStyles.StoreAndScoreContainer>
  </StoreStyles.Container>
);

export default ApelieStore;

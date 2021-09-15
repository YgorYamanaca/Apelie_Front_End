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
        _.keys(_.pick(store, ['facebookAccount', 'youtubeAccount', 'twitterAccount', 'instagramAccount']))
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
    <StoreStyles.TextContainer>
      <ApelieTextBase variant="paragraph1">
        {store.name}
      </ApelieTextBase>
      <ApelieTextBase variant="smallException">
        {`${store.city}, ${store.state}`}
      </ApelieTextBase>
    </StoreStyles.TextContainer>
    <ApelieRating rating={store.rating} />
  </StoreStyles.Container>
);

export default ApelieStore;

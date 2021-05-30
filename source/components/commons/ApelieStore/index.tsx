import IStore from '@/types/interfaces/interface-store';
import React from 'react';
import ApelieRating from '../ApelieRating';
import ApelieTextBase from '../ApelieTextBase';
import StoreStyles from './styles';

interface IStoreComponent {
  store: IStore,
}

const ApelieStore: React.FC<IStoreComponent> = ({
  store,
}) => (
  <StoreStyles.Container id={`StoreStyles-Container-${store.storeId}`}>
    <StoreStyles.PhotoContainer>
      <StoreStyles.StorePhotoContainer imgUrl={store.logoUrl}>
        <StoreStyles.UserPhotoContainer imgUrl={store.owner?.photoUrl || '/images/User/default-user-image.png'} />
      </StoreStyles.StorePhotoContainer>
      <ApelieRating rating={store.rating} />
    </StoreStyles.PhotoContainer>
    <StoreStyles.TextContainer>
      <ApelieTextBase tag="h1" variant="subTitle">
        {store.name}
      </ApelieTextBase>
      <ApelieTextBase tag="p" variant="paragraph1">
        {store.description}
      </ApelieTextBase>
    </StoreStyles.TextContainer>
  </StoreStyles.Container>
);

export default ApelieStore;

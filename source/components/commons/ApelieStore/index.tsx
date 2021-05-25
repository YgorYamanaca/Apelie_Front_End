import IStore from '@/types/interfaces/interface-store';
import React from 'react';
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
      <StoreStyles.StorePhotoContainer imgUrl={store.bannerUrl}>
        <StoreStyles.UserPhotoContainer imgUrl={store.owner?.photoUrl} />
      </StoreStyles.StorePhotoContainer>
      <ApelieTextBase tag="p">
        {`Componente de score:${store.rating}`}
      </ApelieTextBase>
    </StoreStyles.PhotoContainer>
    <StoreStyles.TextContainer>
      <ApelieTextBase variant="subTitle">
        {store.name}
      </ApelieTextBase>
      <ApelieTextBase tag="p" variant="paragraph1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Erat velit scelerisque in dictum.
      </ApelieTextBase>
    </StoreStyles.TextContainer>
  </StoreStyles.Container>
);

export default ApelieStore;

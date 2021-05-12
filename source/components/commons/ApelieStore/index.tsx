import IStore from '@/types/interfaces/interface-store';
import React from 'react';
import ApelieTextBase from '../ApelieTextBase';
import StoreStyles from './styles';

interface IStoreComponent {
  id: string,
  store: IStore,
}

const ApelieStore: React.FC<IStoreComponent> = ({
  id,
  store,
}) => (
  <StoreStyles.Container id={`StoreStyles-Container-${id}`}>
    <StoreStyles.PhotoContainer>
      <StoreStyles.StorePhotoContainer imgUrl={store.storeImageUrl}>
        <StoreStyles.UserPhotoContainer imgUrl={store.userPhoto} />
      </StoreStyles.StorePhotoContainer>
      <ApelieTextBase tag="p">
        {`Componente de score:${store.score}`}
      </ApelieTextBase>
    </StoreStyles.PhotoContainer>
    <StoreStyles.TextContainer>
      <ApelieTextBase variant="subTitle">
        {store.name}
      </ApelieTextBase>
      <ApelieTextBase tag="p" variant="paragraph1">
        {store.description}
      </ApelieTextBase>
    </StoreStyles.TextContainer>
  </StoreStyles.Container>
);

export default ApelieStore;

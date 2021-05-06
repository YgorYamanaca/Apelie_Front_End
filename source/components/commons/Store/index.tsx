import IStore from '@/types/interfaces/interface-store';
import React from 'react';
import TextBase from '../TextBase';
import StoreStyles from './styles';

interface IStoreComponent {
  id: string,
  store: IStore,
}

const Store: React.FC<IStoreComponent> = ({
  id,
  store,
}) => {
  const teste = 'oi';
  return (
    <StoreStyles.Container id={`StoreStyles-Container-${id}`}>
      <StoreStyles.PhotoContainer>
        <StoreStyles.StorePhotoContainer imgUrl={store.storeImageUrl}>
          <StoreStyles.UserPhotoContainer imgUrl={store.userPhoto} />
        </StoreStyles.StorePhotoContainer>
        <TextBase tag="p">
          {`Componente de score:${store.score}`}
        </TextBase>
      </StoreStyles.PhotoContainer>
      <StoreStyles.TextContainer>
        <TextBase variant="subTitle">
          {store.name}
        </TextBase>
        <TextBase tag="p" variant="paragraph1">
          {store.description}
        </TextBase>
      </StoreStyles.TextContainer>
    </StoreStyles.Container>
  );
};

export default Store;

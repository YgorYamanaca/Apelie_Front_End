import React, { useMemo } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { IStore } from '@/types/interfaces/interface-store';
import ApelieRating from '../ApelieRating';
import ApelieTextBase from '../ApelieTextBase';
import ApelieUserPhotoComponent from '../ApelieUserPhotoComponent';
import StoreStyles from './styles';
import ApelieStoreBackGround from '../ApelieStoreBackground';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';

interface IStoreComponent {
  store: IStore;
}

const ApelieStore: React.FC<IStoreComponent> = ({ store }) => {
  const router = useRouter();
  const DEFAULT_USER_PHOTO = '/images/User/default-user-image.png';
  const DEFAULT_STORE_PHOTO = '/images/Store/default-placeholder.png';

  const userPhoto = useMemo(() => (
    store?.owner?.photoUrl ? store.owner.photoUrl : DEFAULT_USER_PHOTO
  ), [store]);

  const bannerPhoto = useMemo(() => (
    store?.bannerUrl ? store.bannerUrl : DEFAULT_STORE_PHOTO
  ), [store]);

  const logoPhoto = useMemo(() => (
    store?.logoUrl ? store.logoUrl : DEFAULT_STORE_PHOTO
  ), [store]);

  return (
    <StoreStyles.Container id={`StoreStyles-Container-${store.storeId}`} onClick={() => router.push(`${ApeliePageAlias.Store}/${store.storeId}`)}>
      <ApelieStoreBackGround
        bannerUrl={bannerPhoto}
        storeMediaSocialArray={
          _.keys(_.omitBy(_.pick(store, [
            'facebookAccount',
            'youtubeAccount',
            'twitterAccount',
            'instagramAccount',
          ]), _.isEmpty))
        }
      />
      <StoreStyles.StoreOverflowContainer>
        <div>
          <StoreStyles.StorePhotoContainer imgUrl={logoPhoto}>
            <StoreStyles.UserPhotoContainer>
              <ApelieUserPhotoComponent
                userPhotoUrl={userPhoto}
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
        <div id="apelie-store-left-content">
          <ApelieRating rating={store.rating ? store.rating : 0} />

          {store.products.length > 0 && (
            <div id="apelie-store-product">
              <div>
                {store.products.map((product, index) => (
                  <StoreStyles.ProductImageContainer
                    key={`${product.name}-${index + 1}`}
                    src={product.images[0].url}
                    alt={`${product.name}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </StoreStyles.StoreAndScoreContainer>
    </StoreStyles.Container>
  );
};

export default ApelieStore;

import React from 'react';
import { IStore } from '@/types/interfaces/interface-store';
import StoreScreenStyle from './styles';

interface IStoreScreen {
    store: IStore;
    isUserStore?: boolean;
}

const StoreScreen : React.FC<IStoreScreen> = ({
  store,
  isUserStore,
}) => (
  <StoreScreenStyle.Container>
    {JSON.stringify(isUserStore)}
  </StoreScreenStyle.Container>
);

export default StoreScreen;

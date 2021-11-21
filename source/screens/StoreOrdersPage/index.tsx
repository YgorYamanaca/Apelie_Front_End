import React, { useLayoutEffect } from 'react';
import { useMutation } from 'react-query';
import { doGetUserStoreOrders } from '@/services/user';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';
import StoreOrdersScreenStyles from './styles';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import ApelieStoreOrder from '@/components/commons/ApelieStoreOrder';

interface IStoreOrdersScreen {
    storeId: string,
    isRequestSuccess: boolean,
}

const StoreOrdersScreen: React.FC<IStoreOrdersScreen> = ({
  storeId,
  isRequestSuccess,
}) => {
  const doGetMyStoreOrders = useMutation(doGetUserStoreOrders);
  useLayoutEffect(() => {
    if (isRequestSuccess) {
      doGetMyStoreOrders.mutate(storeId);
    }
  }, [isRequestSuccess]);

  return (
    <StoreOrdersScreenStyles.Container>
      {isRequestSuccess ? (
        <>
          <ApeliePageTitle text="Seus Pedidos" textVariant="title" />
          <StoreOrdersScreenStyles.OrdersContainer>
            {doGetMyStoreOrders.data?.data.map((storeOrder) => (
              <ApelieStoreOrder key={`apelie-store-order-${storeOrder.orderId}`} storeId={storeId} order={storeOrder} />
            ))}
          </StoreOrdersScreenStyles.OrdersContainer>
        </>
      ) : <ApelieLoadingSpinner size="35px" />}
    </StoreOrdersScreenStyles.Container>
  );
};

export default StoreOrdersScreen;

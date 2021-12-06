import React, { useCallback, useLayoutEffect } from 'react';
import { useMutation } from 'react-query';
import { doGetUserStoreOrders } from '@/services/user';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';
import StoreOrdersScreenStyles from './styles';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import ApelieStoreOrder from '@/components/commons/ApelieStoreOrder';
import ApelieTextBase from '@/components/commons/ApelieTextBase';

interface IStoreOrdersScreen {
    storeId: string,
    isRequestSuccess: boolean,
}

const StoreOrdersScreen: React.FC<IStoreOrdersScreen> = ({
  storeId,
  isRequestSuccess,
}) => {
  const doGetMyStoreOrders = useMutation(doGetUserStoreOrders);

  const updateStoreOrdersFunction = useCallback(() => doGetMyStoreOrders.mutate(storeId), [storeId]);

  useLayoutEffect(() => {
    if (isRequestSuccess) {
      doGetMyStoreOrders.mutate(storeId);
    }
  }, [isRequestSuccess]);

  return (
    <StoreOrdersScreenStyles.Container>
      {isRequestSuccess && !doGetMyStoreOrders.isLoading ? (
        <>
          <ApeliePageTitle text="Seus Pedidos" textVariant="title" />
          <StoreOrdersScreenStyles.OrdersContainer>
            {doGetMyStoreOrders.data?.data.length && doGetMyStoreOrders.data?.data.length >= 1
              ? doGetMyStoreOrders.data?.data.map((storeOrder, index) => (
                <ApelieStoreOrder
                  updateOrderFunction={updateStoreOrdersFunction}
                  key={`apelie-store-order-${storeOrder.orderId}-${index + 1}`}
                  storeId={storeId}
                  order={storeOrder}
                />
              ))
              : (
                <StoreOrdersScreenStyles.EmptyOrder>
                  <ApelieTextBase variant="subTitle">
                    Não há nenhum pedido para a sua loja.
                  </ApelieTextBase>
                </StoreOrdersScreenStyles.EmptyOrder>
              )}
          </StoreOrdersScreenStyles.OrdersContainer>
        </>
      ) : <ApelieLoadingSpinner size="35px" />}
    </StoreOrdersScreenStyles.Container>
  );
};

export default StoreOrdersScreen;

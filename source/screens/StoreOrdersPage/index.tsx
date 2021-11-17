import React, { useLayoutEffect } from 'react';
import { useMutation } from 'react-query';
import { doGetUserStoreOrders } from '@/services/user';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';

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
    <div>
      {isRequestSuccess ? JSON.stringify(doGetMyStoreOrders.data) : <ApelieLoadingSpinner size="35px" />}
    </div>
  );
};

export default StoreOrdersScreen;

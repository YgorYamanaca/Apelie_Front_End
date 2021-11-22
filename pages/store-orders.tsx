import React, { useLayoutEffect } from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import { useMutation } from 'react-query';
import StoreOrdersScreen from '@/screens/StoreOrdersPage';
import { doGetUserStore } from '@/services/user';

const StoreOrdersPage: React.FC = () => {
  const doGetMyStore = useMutation(doGetUserStore);

  useLayoutEffect(() => {
    doGetMyStore.mutate();
  }, []);

  return (
    <>
      <StoreOrdersScreen storeId={doGetMyStore.data?.data?.storeId} isRequestSuccess={doGetMyStore.isSuccess} />
    </>
  );
};

export default apeliePageHOC(StoreOrdersPage, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Pedidos da minha loja - Apelie',
    },
    PAGEProps: {
      template: 'COMMON',
    },
  },
});

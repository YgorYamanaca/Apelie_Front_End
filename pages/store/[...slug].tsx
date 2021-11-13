import React, { useLayoutEffect } from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { getStoreById } from '@/services/store';
import StoreScreen from '@/screens/StoreScreen';
import { doGetUserStore } from '@/services/user';

const Store: React.FC = () => {
  const router = useRouter();
  const [slug] = router.query.slug || [];

  const doGetMyStore = useMutation(doGetUserStore);
  const doGetStoreById = useMutation(getStoreById);

  useLayoutEffect(() => {
    if (slug === 'me') {
      doGetMyStore.mutate();
    } else {
      doGetStoreById.mutate(slug);
    }
  }, [slug]);

  return (
    <>
      <StoreScreen
        store={slug === 'me' ? doGetMyStore.data?.data : doGetStoreById.data?.data}
        isRequestLoading={slug === 'me' ? doGetMyStore.isSuccess : doGetStoreById.isSuccess}
        isUserStore={slug === 'me'}
      />
    </>
  );
};

export default apeliePageHOC(Store, {
  apelieTemplateProps: {
    SEOProps: {
      pageTitle: 'Página da Loja - Apelie',
    },
    PAGEProps: {
      template: 'COMMON',
    },
  },
});

import React, { useContext, useLayoutEffect, useState } from 'react';
import apeliePageHOC from 'template/ApeliePageTemplate/HOC';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { getMyStoreById, getStoreById } from '@/services/store';
import StoreScreen from '@/screens/StoreScreen';
import { UserContext } from '@/stores/UserManager';

const Store: React.FC = () => {
  const router = useRouter();
  const [slug] = router.query.slug || [];
  const { loggedUser } = useContext(UserContext);
  const [isUserStore, setIsUserStore] = useState(false);

  const doGetMyStore = useMutation(getMyStoreById);
  const doGetStoreById = useMutation(getStoreById);

  useLayoutEffect(() => {
    if (slug === 'me') {
      loggedUser && doGetMyStore.mutate(loggedUser.userId.toString());
      setIsUserStore(true);
    } else {
      doGetStoreById.mutate(slug);
    }
  }, [loggedUser, slug]);

  return (
    <>
      <StoreScreen
        store={doGetMyStore.data?.data || doGetStoreById.data?.data}
        isUserStore={isUserStore}
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

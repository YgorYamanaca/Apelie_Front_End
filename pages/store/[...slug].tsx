import React, { useContext, useLayoutEffect } from 'react';
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

  const doGetMyStore = useMutation(getMyStoreById);
  const doGetStoreById = useMutation(getStoreById);

  useLayoutEffect(() => {
    if (slug === 'me') {
      loggedUser && doGetMyStore.mutate(loggedUser.userId.toString());
    } else {
      doGetStoreById.mutate(slug);
    }
  }, [slug, loggedUser]);

  return (
    <>
      {slug === 'me' ? (
        loggedUser && <StoreScreen store={doGetMyStore.data?.data[0]} isRequestLoading={doGetMyStore.isSuccess} isUserStore />
      ) : (
        (
          <StoreScreen store={doGetStoreById.data?.data} isRequestLoading={doGetStoreById.isSuccess} />
        ))}
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

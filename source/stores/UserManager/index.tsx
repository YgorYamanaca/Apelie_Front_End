import React, {
  createContext, useState, useLayoutEffect, useEffect, useContext,
} from 'react';
import ILoggedUser from '@/types/interfaces/interface-logged-user';
import { useMutation } from 'react-query';
import { doGetUser } from '@/services/user';
import _ from 'lodash';
import { useRouter } from 'next/router';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import ApiRequester from '@/services/apiRequester';
import { ToastContext } from '../ToastStore';

interface IUserContext {
  loggedUser: ILoggedUser | undefined,
}

export const UserContext = createContext<IUserContext>({
  loggedUser: undefined,
});

const ApelieUserProvider: React.FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>();
  const { setToastMessage } = useContext(ToastContext);
  const router = useRouter();

  function getUserType(user: ILoggedUser): ILoggedUser {
    if (_.some(user, _.isEmpty)) {
      return _.assign(user, { userType: 'UNCOMPLETE' });
    }
    return _.assign(user, { userType: 'COMPLETE' });
  }

  const getLoggedUser = useMutation(doGetUser, {
    onSuccess: (response) => {
      if (response.status === 200) {
        setLoggedUser(getUserType(response.data));
      } else {
        setToastMessage({ message: 'Não foi possível obter os dados do usuário.', type: 'error' });
      }
    },
  });

  useLayoutEffect(() => {
    if (localStorage.getItem('userAuth')) {
      getLoggedUser.mutate();
    }
  }, []);

  useEffect(() => {
    if (loggedUser
      && (router.pathname === ApeliePageAlias.Home
      || router.pathname === ApeliePageAlias.Login
      || router.pathname === ApeliePageAlias.Subscribe
      )) {
      router.push(ApeliePageAlias.MainPage);
    }
  }, [loggedUser]);

  useLayoutEffect(() => {
    const userAuth = localStorage.getItem('userAuth');
    if (userAuth) {
      ApiRequester.apelie.defaults.headers.common.Authorization = userAuth;
    }
  }, []);

  return (
    <UserContext.Provider value={{ loggedUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default ApelieUserProvider;

import React, {
  createContext,
  useState,
  useLayoutEffect,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { useMutation } from 'react-query';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { doGetUser } from '@/services/user';
import ILoggedUser from '@/types/interfaces/interface-logged-user';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import ApiRequester from '@/services/apiRequester';
import { ToastContext } from '../ToastStore';

interface IUserContext {
  loggedUser: ILoggedUser | undefined;
  updateUserInfo: (newLoggedUserInfo: ILoggedUser) => void,
  doLogout: () => void;
  updateUserToken: (token: string) => void;
}

export const UserContext = createContext<IUserContext>({
  loggedUser: undefined,
  updateUserInfo: () => '',
  doLogout: () => '',
  updateUserToken: () => '',
});

const ApelieUserProvider: React.FC = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<ILoggedUser>();
  const [userToken, setUserToken] = useState(localStorage.getItem('userAuth') || '');
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
        setToastMessage({
          message: 'Não foi possível obter os dados do usuário.',
          type: 'error',
        });
      }
    },
  });

  const updateUserInfo = useCallback(
    (newLoggedUser: ILoggedUser) => {
      setLoggedUser({
        ...newLoggedUser,
      });
    },
    [loggedUser],
  );

  const doLogout = useCallback(() => {
    setLoggedUser(undefined);
    localStorage.removeItem('userAuth');
    router.push(ApeliePageAlias.MainPage);
  }, []);

  const updateUserToken = useCallback((token: string) => {
    localStorage.setItem('userAuth', token);
    setUserToken(token);
  }, []);

  useLayoutEffect(() => {
    if (userToken) {
      ApiRequester.apelie.defaults.headers.common.Authorization = userToken;
      getLoggedUser.mutate();
    }
  }, [userToken]);

  useEffect(() => {
    if (
      loggedUser
      && (router.pathname === ApeliePageAlias.Home
        || router.pathname === ApeliePageAlias.Login
        || router.pathname === ApeliePageAlias.Subscribe)
    ) {
      router.push(ApeliePageAlias.MainPage);
    }
  }, [loggedUser]);

  return (
    <UserContext.Provider value={{
      loggedUser, updateUserToken, doLogout, updateUserInfo,
    }}
    >
      {userToken ? !getLoggedUser.isIdle && children : children}
    </UserContext.Provider>
  );
};

export default ApelieUserProvider;

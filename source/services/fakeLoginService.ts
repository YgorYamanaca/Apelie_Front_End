import ILoginInfo from '@/types/interfaces/interface-login-data';
import { AxiosResponse } from 'axios';
import ApiRequester from './apiRequester';

const doLogin = async (LoginInfo: ILoginInfo): Promise<{token: string}> => {
  const response = await ApiRequester.fakeLoginLogin.post('api/login', {
    email: LoginInfo.email,
    password: LoginInfo.password,
  });
  return response.data;
};

const doRegister = async (LoginInfo: ILoginInfo): Promise<AxiosResponse> => {
  const response = await ApiRequester.fakeLoginLogin.post('api/register', {
    email: LoginInfo.email,
    password: LoginInfo.password,
  });
  return response.data;
};

export {
  doRegister,
  doLogin,
};

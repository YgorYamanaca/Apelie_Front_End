import { AxiosResponse } from 'axios';
import ILoginInfo from '@/types/interfaces/interface-login-data';
import ISubscribeRequest from '@/types/interfaces/interface-subscribe-request';
import ApiRequester from './apiRequester';

const doLogin = async (LoginInfo: ILoginInfo): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .post('login', {
      username: LoginInfo.email,
      password: LoginInfo.password,
    })
    .catch((err) => err.response);
  return response;
};

const doRegister = async (
  RegisterInfo: ISubscribeRequest,
): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .post('users', {
      fullName: RegisterInfo.fullName,
      email: RegisterInfo.email,
      password: RegisterInfo.password,
    })
    .catch((err) => err.response);
  return response;
};

const doGetUser = async (): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .get('users/me')
    .catch((err) => err.response);
  return response;
};

const doGetUserStore = async (): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .get('users/me/store')
    .catch((err) => err.response);
  return response;
};

const doGetUserStoreOrders = async (storeId: string | number): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .get(`stores/${storeId}/orders`)
    .catch((err) => err.response);
  return response;
};

export {
  doRegister, doLogin, doGetUser, doGetUserStore, doGetUserStoreOrders,
};

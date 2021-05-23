import ILoginInfo from '@/types/interfaces/interface-login-data';
import ISubscribeRequest from '@/types/interfaces/interface-subscribe-request';
import { AxiosResponse } from 'axios';
import ApiRequester from './apiRequester';

const doLogin = async (LoginInfo: ILoginInfo): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie.post('login', {
    username: LoginInfo.email,
    password: LoginInfo.password,
  });
  return response;
};

const doRegister = async (RegisterInfo: ISubscribeRequest): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie.post('user', {
    fullName: RegisterInfo.fullName,
    gender: RegisterInfo.gender,
    birthDate: RegisterInfo.birthDate,
    email: RegisterInfo.email,
    password: RegisterInfo.password,
  });
  return response;
};

export {
  doRegister,
  doLogin,
};

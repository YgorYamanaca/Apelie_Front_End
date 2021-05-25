import { AxiosResponse } from 'axios';
import ApiRequester from './apiRequester';

const getStore = async (): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie.get('/store').catch((err) => err.response);
  return response;
};

const getStoreById = async (id: string | number): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie.get(`/store/${id}`).catch((err) => err.response);
  return response;
};

export {
  getStore,
  getStoreById,
};

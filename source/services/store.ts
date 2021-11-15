import { AxiosResponse } from 'axios';
import { IStoreRequest } from '@/types/interfaces/interface-store';
import ApiRequester from './apiRequester';
import { IProductRegister } from '@/types/interfaces/interdace-products';

const getStore = async (): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .get('/stores')
    .catch((err) => err.response);
  return response;
};

const postStore = async (Store: IStoreRequest): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .post('/stores', Store)
    .catch((err) => err.response);
  return response;
};

const postStoreProduct = async (updateData: {storeId: number | string, product: IProductRegister}): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .post(`/stores/${updateData.storeId}/products`, updateData.product)
    .catch((err) => err.response);
  return response;
};

const updateStore = async (Store: IStoreRequest): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .put('/stores', Store)
    .catch((err) => err.response);
  return response;
};

const getStoreById = async (id: string | number): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .get(`/stores/${id}`)
    .catch((err) => err.response);
  return response;
};

const getMyStoreById = async (ownerId: string): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .get('/stores', {
      params: {
        ownerId,
      },
    })
    .catch((err) => err.response);
  return response;
};

const getStoreCategorys = async (): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .get('/stores/categories')
    .catch((err) => err.response);
  return response;
};

export {
  getStore, getStoreById, getStoreCategorys, postStore, getMyStoreById, updateStore, postStoreProduct,
};

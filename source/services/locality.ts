import { AxiosResponse } from 'axios';
import ApiRequester from './apiRequester';

const getStates = async (): Promise<AxiosResponse> => {
  const response = await ApiRequester.locality
    .get('/estados')
    .catch((err) => err.response);
  return response;
};

const getCity = async (UF: string): Promise<AxiosResponse> => {
  const response = await ApiRequester.locality
    .get(`/estados/${UF}/municipios`)
    .catch((err) => err.response);
  return response;
};

export { getStates, getCity };

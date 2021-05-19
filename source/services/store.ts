import { AxiosResponse } from 'axios';
import ApiRequester from './apiRequester';

const getDitto = async (): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie.get('/pokemon/ditto');
  return response.data;
};

const getPokemon = async (pokemonName: string): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie.get(`/pokemon/${pokemonName}`);
  return response.data;
};

export {
  getDitto,
  getPokemon,
};

import { AxiosResponse } from 'axios';
import ApiRequester from './apiRequester';

const deleteProduct = async (ProductId: number | string): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .delete(`/products/${ProductId}`)
    .catch((err) => err.response);
  return response;
};

const deleteProductImage = async (deleteParms: {productId: number | string, imageId: number | string}): Promise<AxiosResponse> => {
  const response = await ApiRequester.apelie
    .delete(`/products/${deleteParms.productId}/images/${deleteParms.imageId}`)
    .catch((err) => err.response);
  return response;
};

export {
  deleteProduct,
  deleteProductImage,
};

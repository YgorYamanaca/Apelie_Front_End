import { AxiosResponse } from 'axios';
import { IProductRegisterWithErrors } from '@/types/interfaces/interdace-products';
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

const updateProduct = async (deleteParms: {productId: number | string, product: IProductRegisterWithErrors}): Promise<AxiosResponse> => {
  const newProduct = {
    ...deleteParms.product,
    price: parseFloat(deleteParms.product.price.toString().replaceAll(',', '.')),
  };
  const response = await ApiRequester.apelie
    .put(`/products/${deleteParms.productId}`, newProduct)
    .catch((err) => err.response);
  return response;
};

export {
  deleteProduct,
  deleteProductImage,
  updateProduct,
};

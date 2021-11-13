import React, {
  ChangeEvent, useState,
} from 'react';
import { IProductRegister } from '@/types/interfaces/interdace-products';
import { IForm } from '@/types/interfaces/interface-apelie-form';
import ProductRegisterStyle from './styles';

const ProductRegister: React.VoidFunctionComponent<IForm<IProductRegister>> = ({
  registerStoreRequestValue,
  changeStoreRequestFunction,
}) => {
  const [productRegister, setProductRegister] = useState(registerStoreRequestValue);
  return (
    <ProductRegisterStyle.Container>
    </ProductRegisterStyle.Container>
  );
};

export default ProductRegister;

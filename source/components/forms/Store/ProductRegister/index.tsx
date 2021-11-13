import React, {
  ChangeEvent, useCallback, useEffect, useState,
} from 'react';
import { IProductRegisterWithErrors } from '@/types/interfaces/interdace-products';
import { IForm } from '@/types/interfaces/interface-apelie-form';
import ProductRegisterStyle from './styles';
import ApelieInputField from '@/components/commons/ApelieInputField';
import handleChange from '@/utils/formUtils';
import { formatReal } from '@/utils/mask';
import ApelieUploadMultiPhoto from '@/components/commons/ApelieUploadMultiPhoto';

const ProductRegister: React.VoidFunctionComponent<IForm<IProductRegisterWithErrors>> = ({
  registerStoreRequestValue,
  changeStoreRequestFunction,
}) => {
  const [productRegister, setProductRegister] = useState(registerStoreRequestValue);
  const handleUploadStorebannerUrl = useCallback(
    (images: string[]) => {
      setProductRegister({
        ...registerStoreRequestValue,
        images,
      });
    },
    [registerStoreRequestValue],
  );

  useEffect(() => {
    changeStoreRequestFunction({
      ...productRegister,
      price: parseFloat(productRegister.price.toString()),
      quantity: parseInt(productRegister.quantity.toString(), 10),
    });
  }, [productRegister]);

  return (
    <ProductRegisterStyle.Container>
      <ProductRegisterStyle.ImageUploaderContainer>
        <ApelieUploadMultiPhoto
          onImageSelect={handleUploadStorebannerUrl}
          selectedPhotoKey="productImages"
          textOfUploadDragArea="Insira as imagens do produto"
        />
      </ProductRegisterStyle.ImageUploaderContainer>
      <ProductRegisterStyle.ProductRegister>
        <ApelieInputField
          maxLength={50}
          placeholder="Insira o nome do produto"
          name="name"
          value={productRegister.name}
          onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setProductRegister)
              }
        />
        <ApelieInputField
          min="1"
          placeholder="Insira a quantidade disponível para esse produto"
          name="quantity"
          type="number"
          value={productRegister.quantity === 0 ? '' : productRegister.quantity.toString()}
          onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setProductRegister)
              }
        />
        <ApelieInputField
          placeholder="Insira o preço do produto"
          name="price"
          value={productRegister.price === 0 ? '' : productRegister.price.toString()}
          onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setProductRegister, formatReal)
              }
        />
        <ApelieInputField
          placeholder="Insira a categoria do produto"
          name="category"
          value={productRegister.category.toString()}
          onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setProductRegister)
              }
        />

        <ApelieInputField
          type="textarea"
          placeholder="Descrição do produto (opcional)"
          name="description"
          value={productRegister?.description || ''}
          onChange={
            (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setProductRegister)
          }
          maxLength={275}
        />
      </ProductRegisterStyle.ProductRegister>
    </ProductRegisterStyle.Container>
  );
};

export default ProductRegister;

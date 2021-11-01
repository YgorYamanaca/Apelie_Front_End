import React from 'react';
import { IProduct } from '@/types/interfaces/interdace-products';
import ApelieTextBase from '../ApelieTextBase';
import ApelieProductStyle from './styles';
import ApelieCarousel from '../ApelieCarousel';
import ApelieIconButton from '../ApelieIconButton';
import EditIcon from '@/assets/icons/EditIcon';
import TrashIcon from '@/assets/icons/TrashIcon';
import { isFloat } from '@/utils/validations';

interface IApelieProduct {
    isEditable?: boolean,
    product: IProduct,
}

const ApelieProduct : React.VoidFunctionComponent<IApelieProduct> = ({
  isEditable = false,
  product,
}) => {
  const teste = '';
  return (
    <ApelieProductStyle.Container>
      {teste}
      <div id="apelie-product-name-and-price">
        <ApelieTextBase variant="subTitle">
          {product.name}
        </ApelieTextBase>

        <ApelieTextBase variant="paragraph1">
          {`R$: ${isFloat(product.price) ? product.price : `${product.price},00`}`}
        </ApelieTextBase>
      </div>
      <span id="apelie-product-quantity">
        <ApelieTextBase variant="paragraph1">
          {`Quantidade: ${product.quantity}`}
        </ApelieTextBase>
      </span>
      {isEditable && (
        <div id="apelie-product-edit">
          <ApelieIconButton>
            <EditIcon width="20" height="20" />
          </ApelieIconButton>

          <ApelieIconButton>
            <TrashIcon width="20" height="20" />
          </ApelieIconButton>
        </div>
      )}
      <div id="apelie-product-wrapper">
        {product.images.length > 2
          ? (
            <ApelieCarousel
              id="product-carrousel"
              arrowSize="15"
              elementsList={product.images.map((image) => (
                <ApelieProductStyle.ProductImageContainer
                  key={image.product_image_id}
                  src={image.url}
                  alt={product.name}
                />
              ))}
            />
          )
          : (
            <div id="apelie-product-list">
              {
                product.images.map((image) => (
                  <ApelieProductStyle.ProductImageContainer
                    key={image.product_image_id}
                    src={image.url}
                    alt={product.name}
                  />
                ))
              }
            </div>
          )}
      </div>
    </ApelieProductStyle.Container>
  );
};

export default ApelieProduct;

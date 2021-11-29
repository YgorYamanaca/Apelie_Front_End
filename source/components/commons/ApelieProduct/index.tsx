import React from 'react';
import { IProduct } from '@/types/interfaces/interdace-products';
import ApelieTextBase from '../ApelieTextBase';
import ApelieProductStyle from './styles';
import ApelieCarousel from '../ApelieCarousel';
import { isFloat } from '@/utils/validations';

interface IApelieProduct {
    product: IProduct,
    onModalClick: VoidFunction,
}

const DEFAULT_PRODUCT_PHOTO = '/images/Store/default-placeholder.png';

const ApelieProduct : React.VoidFunctionComponent<IApelieProduct> = ({
  onModalClick,
  product,
}) => (
  <ApelieProductStyle.Container onClick={() => onModalClick()}>
    <div id="apelie-product-name-and-price">
      <ApelieTextBase variant="subTitle">
        {product.name}
      </ApelieTextBase>

      <ApelieTextBase variant="paragraph1">
        {`R$: ${isFloat(product.price) ? product.price : `${product.price},00`}`}
      </ApelieTextBase>
    </div>
    <span id="product-quantity">
      <ApelieTextBase variant="paragraph2" tag="label">Quantidade: </ApelieTextBase>
      <ApelieTextBase id={`${product.quantity >= 1 ? 'disponible' : 'indisponible'}`} variant="paragraph2">
        {product.quantity !== 0
          ? `${product.quantity} ${product.quantity > 1 ? 'unidades' : 'unidade'}`
          : 'Indisponível'}
      </ApelieTextBase>
    </span>
    <div id="product-category">
      <ApelieTextBase variant="paragraph2" tag="label">Categoria: </ApelieTextBase>
      <ApelieTextBase variant="paragraph2">{product.category}</ApelieTextBase>
    </div>
    <div id="apelie-product-wrapper">
      {product.images.length > 1
        ? (
          <ApelieCarousel
            id="product-carrousel"
            arrowSize="15"
            hasArrow={false}
            breakPointsArray={[
              { width: 0, itemsToShow: 1 },
              { width: 450, itemsToShow: 1 },
              { width: 960, itemsToShow: 1 },
              { width: 1280, itemsToShow: 1 },
              { width: 1920, itemsToShow: 1 },
            ]}
            elementsList={product.images.map((image) => (
              <ApelieProductStyle.ProductImageContainer
                key={image.product_image_id}
                src={image?.url || DEFAULT_PRODUCT_PHOTO}
                alt={product.name}
              />
            ))}
          />
        )
        : (
          <div id="apelie-product-list">
            <ApelieProductStyle.ProductImageContainer
              key={product.images[0]?.product_image_id}
              src={product.images[0]?.url || DEFAULT_PRODUCT_PHOTO}
              alt={product.name}
            />
          </div>
        )}
    </div>
  </ApelieProductStyle.Container>
);

export default ApelieProduct;

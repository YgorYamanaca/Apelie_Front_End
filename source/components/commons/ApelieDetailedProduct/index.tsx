import React, { useCallback, useState } from 'react';
import { IProduct } from '@/types/interfaces/interdace-products';
import ApelieDetailedProductStyles from './styles';
import ApelieCarousel from '../ApelieCarousel';
import ApeliePageTitle from '../ApeliePageTitle';
import ApelieButton from '../ApelieButton';
import ApelieModal from '../ApelieModal';
import ApelieTextBase from '../ApelieTextBase';
import { isFloat } from '@/utils/validations';
import ApelieIconButton from '../ApelieIconButton';
import EditIcon from '@/assets/icons/EditIcon';
import TrashIcon from '@/assets/icons/TrashIcon';

interface ApelieProductModalContent {
    product: IProduct,
    isOpen: boolean,
    onCloseButtonAction: VoidFunction,
    isEditable?: boolean,
  }

const ApelieDetailedProduct: React.FC<ApelieProductModalContent> = ({
  product,
  isOpen = false,
  onCloseButtonAction,
  isEditable = false,
}) => {
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);
  return (
    <ApelieModal hasCloseButton={false} show={isOpen}>
      <ApelieDetailedProductStyles.Container>
        <ApelieModal show={isEditProductModalOpen} onClose={() => setIsEditProductModalOpen(false)}>
          <div>
            aaaa
          </div>
        </ApelieModal>
        <ApelieModal show={isDeleteProductModalOpen} onClose={() => setIsDeleteProductModalOpen(false)} />
        {isEditable && (
          <div id="apelie-product-edit">
            <ApelieIconButton onClick={() => setIsEditProductModalOpen(true)}>
              <EditIcon width="20" height="20" />
            </ApelieIconButton>

            <ApelieIconButton onClick={() => setIsDeleteProductModalOpen(true)}>
              <TrashIcon width="20" height="20" />
            </ApelieIconButton>
          </div>
        )}
        <div id="product-id-header">
          <ApeliePageTitle text={`${product.name}`} />
        </div>
        <ApelieDetailedProductStyles.ProductInfoContainer>
          <ApelieDetailedProductStyles.ImagesContainer>
            <ApelieCarousel
              id="product-carrousel"
              arrowSize="25"
              breakPointsArray={[
                { width: 0, itemsToShow: 1 },
                { width: 450, itemsToShow: 1 },
                { width: 960, itemsToShow: 1 },
                { width: 1280, itemsToShow: 1 },
                { width: 1920, itemsToShow: 1 },
              ]}
              elementsList={product.images.map((image, index) => (
                <ApelieDetailedProductStyles.ImageContainer
                  id={`product-image-${index + 1}`}
                  key={image.product_image_id}
                  src={image.url}
                  alt={product.name}
                />
              ))}
            />
          </ApelieDetailedProductStyles.ImagesContainer>
          <ApelieDetailedProductStyles.InfoContainer>
            <span>
              <ApelieTextBase tag="label" variant="subTitle">Preço: </ApelieTextBase>
              <ApelieTextBase variant="subTitle">{`R$: ${isFloat(product.price) ? product.price : `${product.price},00`}`}</ApelieTextBase>
            </span>
            <span>
              <ApelieTextBase tag="label" variant="subTitle">Quantidade: </ApelieTextBase>
              <ApelieTextBase variant="subTitle">{`${product.quantity} ${product.quantity > 1 ? 'unidades' : 'unidade'}`}</ApelieTextBase>
            </span>
            {product.description && (
            <span id="product-description">
              <ApelieTextBase tag="label" variant="subTitle">Sobre o produto:</ApelieTextBase>
              <ApelieTextBase variant="subTitle">{product.description}</ApelieTextBase>
            </span>
            )}
          </ApelieDetailedProductStyles.InfoContainer>
        </ApelieDetailedProductStyles.ProductInfoContainer>
        <ApelieDetailedProductStyles.Footer>
          <ApelieButton
            id="back-button"
            textVariant="paragraph1"
            buttonColor="primary"
            textColor="appPrimary"
            buttonType="secondary"
            onClick={() => {
              console.log('oieeeee', onCloseButtonAction);
              onCloseButtonAction();
            }}
          >
            Voltar
          </ApelieButton>
          <ApelieButton
            id="next-button"
            textVariant="paragraph1"
            disabled
          >
            Adicionar no carrinho
          </ApelieButton>
        </ApelieDetailedProductStyles.Footer>
      </ApelieDetailedProductStyles.Container>
    </ApelieModal>
  );
};

export default ApelieDetailedProduct;

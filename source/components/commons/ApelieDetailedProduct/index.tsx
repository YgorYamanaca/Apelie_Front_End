import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { IProduct, IProductRegisterWithErrors } from '@/types/interfaces/interdace-products';
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
import ApelieDeleteModal from '../ApelieDeleteModal';
import { ToastContext } from '@/stores/ToastStore';
import { deleteProduct, deleteProductImage, updateProduct } from '@/services/product';
import ProductRegister from '@/components/forms/Store/ProductRegister';
import ApelieForm from '../ApelieForm';

interface ApelieProductModalContent {
    product: IProduct,
    isOpen: boolean,
    onCloseButtonAction: VoidFunction,
    uploadPageFunction: VoidFunction,
    isEditable?: boolean,
  }

const ApelieDetailedProduct: React.FC<ApelieProductModalContent> = ({
  product,
  isOpen = false,
  onCloseButtonAction,
  uploadPageFunction,
  isEditable = false,
}) => {
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);
  const [isDeleteImageModalOpen, setIsDeleteImageModalOpen] = useState<number | string>();
  const [produtctRegister, setProductRegister] = useState<IProductRegisterWithErrors>({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
    category: product.category,
    images: product.images.map((image) => image.url),
    description: product.description,
  });
  const { setToastMessage } = useContext(ToastContext);

  const DeleteProductRequest = useMutation(deleteProduct, {
    onSuccess: (response) => {
      if (response?.status === 204) {
        setToastMessage({
          message: 'O produto selecionado foi deletado com sucesso.',
          type: 'success',
        });
        uploadPageFunction();
        setIsDeleteProductModalOpen(false);
        onCloseButtonAction();
      } else {
        setToastMessage({
          message: 'Erro ao tentar deletar o produto.',
          type: 'error',
        });
      }
    },
  });

  const DeleteImageRequest = useMutation(deleteProductImage, {
    onSuccess: (response) => {
      if (response?.status === 204) {
        setToastMessage({
          message: 'A imagem selecionado foi deletado com sucesso.',
          type: 'success',
        });
        uploadPageFunction();
        setIsDeleteImageModalOpen(undefined);
        onCloseButtonAction();
      } else {
        setToastMessage({
          message: 'Erro ao tentar deletar a imagem.',
          type: 'error',
        });
      }
    },
  });

  const UploadProductRequest = useMutation(updateProduct, {
    onSuccess: (response) => {
      if (response?.status === 200) {
        setToastMessage({
          message: 'O seu produto foi atualizado com sucesso',
          type: 'success',
        });
        uploadPageFunction();
        setIsEditProductModalOpen(false);
        onCloseButtonAction();
      } else {
        setToastMessage({
          message: 'Erro ao tentar atualizar o produto.',
          type: 'error',
        });
      }
    },
  });

  return (
    <ApelieModal hasCloseButton={false} show={isOpen}>
      <ApelieDetailedProductStyles.Container>
        <ApelieModal show={isEditProductModalOpen} onClose={() => setIsEditProductModalOpen(false)}>
          <ApelieForm
            id="att-product-info"
            formTitle="Atualização da informação do produto"
            backButtonText="Voltar"
            nextButtonText="Atualizar"
            hasBackGround={false}
            disabledCondition={
              produtctRegister.category === ''
              && produtctRegister.name === ''
              && produtctRegister.price === 0
              && produtctRegister.quantity === 0
            }
            nextButtonAction={() => UploadProductRequest.mutate({
              productId: product.productId,
              product: {
                ...produtctRegister,
                images: product.images.map((image) => produtctRegister.images.includes(image.url)).every((isEqual) => isEqual === true) ? [] : produtctRegister.images,
              },
            })}
            backButtonAction={() => setIsEditProductModalOpen(false)}
          >
            <ProductRegister registerStoreRequestValue={produtctRegister} changeStoreRequestFunction={setProductRegister} />
          </ApelieForm>
        </ApelieModal>
        <ApelieModal hasCloseButton={false} show={isDeleteProductModalOpen}>
          <ApelieDeleteModal
            text="Deseja deletar esse produto?"
            onCancel={() => setIsDeleteProductModalOpen(false)}
            onDelete={() => DeleteProductRequest.mutate(product.productId)}
          />
        </ApelieModal>
        <ApelieModal hasCloseButton={false} show={!!isDeleteImageModalOpen}>
          <ApelieDeleteModal
            text="Deseja deletar essa imagem?"
            onCancel={() => setIsDeleteImageModalOpen(undefined)}
            onDelete={() => isDeleteImageModalOpen && DeleteImageRequest.mutate({ productId: product.productId, imageId: isDeleteImageModalOpen })}
          />
        </ApelieModal>
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
                <ApelieDetailedProductStyles.ImageContainer>
                  <ApelieDetailedProductStyles.Image
                    id={`product-image-${index + 1}`}
                    key={image.product_image_id}
                    src={image.url}
                    alt={product.name}
                  />
                  {isEditable && product.images.length > 1 && (
                    <ApelieIconButton id="delete-image-button" isPadding onClick={() => setIsDeleteImageModalOpen(image.product_image_id)}>
                      <TrashIcon width="20" height="20" />
                    </ApelieIconButton>
                  )}
                </ApelieDetailedProductStyles.ImageContainer>
              ))}
            />
          </ApelieDetailedProductStyles.ImagesContainer>
          <ApelieDetailedProductStyles.InfoContainer>
            <span>
              <ApelieTextBase tag="label" variant="subTitle">Preço: </ApelieTextBase>
              <ApelieTextBase variant="subTitle">{`R$: ${isFloat(product.price) ? product.price : `${product.price},00`}`}</ApelieTextBase>
            </span>
            <span id="product-quantity">
              <ApelieTextBase tag="label" variant="subTitle">Quantidade: </ApelieTextBase>
              <ApelieTextBase id={`${product.quantity >= 1 ? 'disponible' : 'indisponible'}`} variant="subTitle">
                {product.quantity !== 0
                  ? `${product.quantity} ${product.quantity > 1 ? 'unidades' : 'unidade'}`
                  : 'Indisponível'}
              </ApelieTextBase>
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
            onClick={() => onCloseButtonAction()}
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

import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { useMutation } from 'react-query';
import { IStore } from '@/types/interfaces/interface-store';
import StoreScreenStyle from './styles';
import ApelieStoreBackGround from '@/components/commons/ApelieStoreBackground';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApelieIconButton from '@/components/commons/ApelieIconButton';
import AddIcon from '@/assets/icons/AddIcon';
import ApelieProduct from '@/components/commons/ApelieProduct';
import ApelieModal from '@/components/commons/ApelieModal';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';
import ApelieStoreResume from '@/components/commons/ApelieStoreResume';
import ApelieForm from '@/components/commons/ApelieForm';
import ProductRegister from '@/components/forms/Store/ProductRegister';
import { IProduct, IProductRegisterWithErrors } from '@/types/interfaces/interdace-products';
import { postStoreProduct } from '@/services/store';
import { ToastContext } from '@/stores/ToastStore';
import ApelieDetailedProduct from '@/components/commons/ApelieDetailedProduct';

interface IStoreScreen {
    store: IStore;
    isUserStore?: boolean;
    isRequestLoading?: boolean;
    uploadPageFunction: VoidFunction;
}

const INITAL_PRODUCT_REGISTER_VALUE: IProductRegisterWithErrors = {
  category: '',
  images: [],
  name: '',
  price: 0,
  quantity: 0,

  priceError: '',
  quantityError: '',
};

const StoreScreen : React.FC<IStoreScreen> = ({
  store,
  isUserStore,
  isRequestLoading = true,
  uploadPageFunction,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [isAddPrductModalOpen, setIsAddPrductModalOpen] = useState(false);
  const [productRegister, setProductRegister] = useState<IProductRegisterWithErrors>(INITAL_PRODUCT_REGISTER_VALUE);
  const { setToastMessage } = useContext(ToastContext);

  const doRegisterProduct = useMutation(postStoreProduct, {
    onSuccess: (response) => {
      if (response?.status === 201) {
        setToastMessage({
          message: 'Seu produto foi cadastrado com sucesso',
          type: 'success',
        });
        setIsAddPrductModalOpen(false);
        uploadPageFunction();
      } else {
        setToastMessage({
          message: 'Erro ao tentar cadastrar o produto',
          type: 'error',
        });
      }
    },
  });

  function handleSubimit() {
    if (productRegister.price === 0 || productRegister.quantity === 0) {
      setProductRegister({
        ...productRegister,
        priceError: productRegister.price === 0 ? 'Não pode cadastrar um produto de graça' : '',
        quantityError: productRegister.quantity === 0 ? 'Precisa conter mais de um item' : '',
      });
    } else {
      doRegisterProduct.mutate({
        storeId: store.storeId,
        product: productRegister,
      });
    }
  }

  return (
    <StoreScreenStyle.Container>
      {selectedProduct && (
        <ApelieDetailedProduct
          isEditable={isUserStore}
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onCloseButtonAction={() => setSelectedProduct(undefined)}
        />
      )}
      {isRequestLoading ? (
        <>
          <ApelieModal show={isAddPrductModalOpen} onClose={() => setIsAddPrductModalOpen(false)}>
            <ApelieForm
              id="product-register"
              formTitle="Cadastro de produto"
              disabledCondition={
                productRegister.name === ''
                && productRegister.price.toString() === '0'
                && productRegister.quantity.toString() === '0'
                && productRegister.category === ''
                && productRegister.images.length === 0
              }
              backButtonText="Cancelar"
              nextButtonText="Cadastrar"
              backButtonAction={() => setIsAddPrductModalOpen(false)}
              nextButtonAction={() => handleSubimit()}
              hasBackGround={false}
            >
              <ProductRegister registerStoreRequestValue={productRegister} changeStoreRequestFunction={setProductRegister} />
            </ApelieForm>
          </ApelieModal>
          <ApelieStoreBackGround
            backgroundHeight="175px"
            store={store}
            logoSize="30"
            storeMediaSocialArray={
            _.keys(_.omitBy(_.pick(store, [
              'facebookAccount',
              'youtubeAccount',
              'twitterAccount',
              'instagramAccount',
            ]), _.isEmpty))
          }
            isLogoPositionBottom
            isEditable={isUserStore}
            whenEdited={uploadPageFunction}
          />
          <StoreScreenStyle.StoreInfoContainer>
            <ApelieStoreResume store={store} isEditable={isUserStore} whenEdited={uploadPageFunction} />
          </StoreScreenStyle.StoreInfoContainer>
          <StoreScreenStyle.ProductContainer>
            <div id="title-wrapper">
              <ApelieTextBase
                variant="title"
              >
                Catálogo
              </ApelieTextBase>
              {isUserStore && (
              <ApelieIconButton onClick={() => setIsAddPrductModalOpen(true)}>
                <AddIcon width="20" height="20" />
              </ApelieIconButton>
              )}
            </div>

            <div id="product-items-container">
              {store?.products.map((product, index) => (
                <>
                  <ApelieProduct key={`${product.name} - ${index + 1}`} product={product} onModalClick={() => setSelectedProduct(product)} />
                </>
              ))}
            </div>
          </StoreScreenStyle.ProductContainer>
        </>
      ) : <ApelieLoadingSpinner size="35px" />}
    </StoreScreenStyle.Container>
  );
};

export default StoreScreen;

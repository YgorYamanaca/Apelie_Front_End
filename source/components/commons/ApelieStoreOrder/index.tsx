/* eslint-disable no-nested-ternary */
import React, {
  ChangeEvent, useCallback, useContext, useState,
} from 'react';
import { useMutation } from 'react-query';
import { IStoreOrders } from '@/types/interfaces/interface-store';
import ApelieTextBase from '../ApelieTextBase';
import ApelieStoreOrderStyles from './styles';
import { toCorrectDateFormat } from '@/utils/format';
import { StoreOrdersStatus } from '@/types/enums/enum-store-orders-status';
import { StorePaymentMethod } from '@/types/enums/enum-store-payment-method';
import { isFloat } from '@/utils/validations';
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon';
import ApelieIconButton from '../ApelieIconButton';
import ApelieCarousel from '../ApelieCarousel';
import AddTrackingIcon from '@/assets/icons/AddTrackingIcon';
import ApelieModal from '../ApelieModal';
import ApelieForm from '../ApelieForm';
import ApelieInputField from '../ApelieInputField';
import { ToastContext } from '@/stores/ToastStore';
import { insertOrderTrackingCode } from '@/services/store';

interface IApelieStoreOrder {
  storeId: string,
  order: IStoreOrders,
  updateOrderFunction: VoidFunction
}

const DEFAULT_PRODUCT_PHOTO = '/images/Store/default-placeholder.png';

const ApelieStoreOrder: React.FC<IApelieStoreOrder> = ({
  storeId,
  order,
  updateOrderFunction,
}) => {
  const { setToastMessage } = useContext(ToastContext);
  const [trackingCode, setTrackingCode] = useState('');
  const [isInsertTrackingCodeOpen, setIsInsertTrackingCodeOpen] = useState(false);
  const [hasMoreInfo, setHasMoreInfo] = useState(false);

  const doInsertStoreTrackingCode = useMutation(insertOrderTrackingCode, {
    onSuccess: (response) => {
      if (response.status === 204) {
        setToastMessage({
          message: `O código de rastreio foi ${trackingCode ? 'atualizado' : 'cadastrado'} com sucesso.`,
          type: 'success',
        });
        setIsInsertTrackingCodeOpen(false);
        updateOrderFunction();
      } else {
        setToastMessage({
          message: `Erro ao tentar ${trackingCode ? 'atualizar' : 'cadastrar'} o código de rastreio.`,
          type: 'error',
        });
      }
    },
  });

  const orderStatusObject: {[key in StoreOrdersStatus]: string} = {
    Canceled: 'Pedido cancelado',
    Awaiting_payment: 'Aguardando pagamento',
    Awaiting_shipping: 'Aguardando envio do pedido',
    Finished: 'Concluído',
    Shipping: 'Despachado',
  };

  const orderPaymentMethod: {[key in StorePaymentMethod]: string} = {
    Boleto: 'Boleto',
    Credit_card: 'Cartão de crédito',
    Pix: 'PIX',
  };

  const getPriceValue = useCallback((item) => {
    const priceTotal = item.product.price * item.quantity;
    return `R$: ${isFloat(priceTotal) ? String(priceTotal).split('.')[1]?.length === 1 ? `${String(priceTotal).replace('.', ',')}0` : String(priceTotal).replace('.', ',') : `${priceTotal},00`}`;
  }, [order]);

  return (
    <ApelieStoreOrderStyles.Container>
      <ApelieModal
        show={isInsertTrackingCodeOpen}
        hasCloseButton={false}
        modalHeight="fit-content"
      >
        <ApelieForm
          id="tracking-code-form"
          formTitle={trackingCode ? 'Atualizar código de rastreio' : 'Cadastrar código de rastreio'}
          disabledCondition={!trackingCode}
          nextButtonAction={() => doInsertStoreTrackingCode.mutate({
            storeId,
            trackingCode,
            orderId: order.orderId.toString(),
          })}
          backButtonAction={() => setIsInsertTrackingCodeOpen(false)}
          backButtonText="Voltar"
          hasBackGround={false}
          nextButtonText={trackingCode ? 'Atualizar' : 'Cadastrar'}
        >
          <ApelieInputField
            maxLength={18}
            placeholder="Insira o código de rastreio"
            name="tracking-code"
            value={trackingCode || order.trackingCode}
            onChange={
                (event: ChangeEvent<HTMLInputElement>) => setTrackingCode(event.target.value)
              }
          />
        </ApelieForm>
      </ApelieModal>
      <div id="product-name-and-id">
        <span>
          <ApelieTextBase variant="title" tag="label">
            Pedido de&nbsp;
          </ApelieTextBase>
          <ApelieTextBase variant="subTitle">
            {order.user.fullName}
          </ApelieTextBase>
        </span>
        <ApelieTextBase id="split" variant="title" tag="label">
            &nbsp;-&nbsp;
        </ApelieTextBase>
        <span>
          <ApelieTextBase variant="title" tag="label">
            Número do pedido:&nbsp;
          </ApelieTextBase>
          <ApelieTextBase variant="subTitle">
            {order.orderId}
          </ApelieTextBase>
        </span>
      </div>
      <ApelieStoreOrderStyles.OrderResume>
        <div id="order_date">
          <ApelieTextBase variant="subTitle" tag="label">
            Pedido feito em:&nbsp;
          </ApelieTextBase>
          <ApelieTextBase variant="paragraph1">
            {toCorrectDateFormat(new Date(order.createdAt))}
          </ApelieTextBase>
        </div>
        <div id="order_status">
          <ApelieTextBase variant="subTitle" tag="label">
            Situação:&nbsp;
          </ApelieTextBase>
          <ApelieTextBase id={`${order.status}`} variant="paragraph1">
            {orderStatusObject[order.status]}
          </ApelieTextBase>
        </div>
        <div id="payment_method">
          <ApelieTextBase variant="subTitle" tag="label">
            Pagamento feito em:&nbsp;
          </ApelieTextBase>
          <ApelieTextBase variant="paragraph1">
            {orderPaymentMethod[order.paymentMethod]}
          </ApelieTextBase>
        </div>
        <div id="total_price">
          <ApelieTextBase variant="subTitle" tag="label">
            Total:&nbsp;
          </ApelieTextBase>
          <ApelieTextBase variant="paragraph1">
            {`R$: ${isFloat(order.totalValue) ? String(order.totalValue).split('.')[1]?.length === 1 ? `${String(order.totalValue).replace('.', ',')}0` : String(order.totalValue).replace('.', ',') : `${order.totalValue},00`}`}
          </ApelieTextBase>
        </div>
      </ApelieStoreOrderStyles.OrderResume>
      <ApelieStoreOrderStyles.AddressToSendProductWrapper>
        <ApelieTextBase variant="subTitle" tag="label">
          Enviado para:&nbsp;
        </ApelieTextBase>
        <div id="address-detail">
          <div>
            <ApelieTextBase variant="paragraph1" tag="label">
              Cep:&nbsp;
            </ApelieTextBase>
            <ApelieTextBase variant="paragraph2">
              {order.address.zipCode}
            </ApelieTextBase>
          </div>
          <div>
            <ApelieTextBase variant="paragraph1" tag="label">
              Endereço:&nbsp;
            </ApelieTextBase>
            <ApelieTextBase variant="paragraph2">
              {`${order.address.street} - ${order.address.number}, ${order.address.district}, ${order.address.state} -  ${order.address.city}`}
            </ApelieTextBase>
          </div>
          {order.address.complement && (
            <div>
              <ApelieTextBase variant="paragraph1" tag="label">
                Complemento:&nbsp;
              </ApelieTextBase>
              <ApelieTextBase variant="paragraph2">
                {`${order.address.complement}`}
              </ApelieTextBase>
            </div>
          )}
        </div>
      </ApelieStoreOrderStyles.AddressToSendProductWrapper>
      <div id={hasMoreInfo ? 'has-more-info' : 'hasent-more-info'}>
        <ApelieIconButton onClick={() => setHasMoreInfo(!hasMoreInfo)}>
          <LeftArrowIcon height="25" width="25" />
        </ApelieIconButton>
      </div>
      <ApelieStoreOrderStyles.ItemsListWrapper hasMoreInfo={hasMoreInfo}>
        {order.itemList.map((item, index) => (
          <ApelieStoreOrderStyles.ItemWrapper key={`${item.product}-${index + 1}`}>
            <ApelieStoreOrderStyles.OrderProductWrapper>
              <ApelieTextBase variant="subTitle" tag="label">
                {item.product.name}
              </ApelieTextBase>
              <ApelieTextBase id="quantity-text" variant="subTitle" tag="label">
                {`Quantidade: ${item.quantity}`}
              </ApelieTextBase>
              {item.description && (
                <span id="product-description">
                  <ApelieTextBase tag="label" variant="subTitle">Mensagem do comprador:</ApelieTextBase>
                  <ApelieTextBase variant="subTitle">{item.description}</ApelieTextBase>
                </span>
              )}
              <ApelieCarousel
                id="product-carousel"
                elementsList={item.product.images.map((image) => (
                  <ApelieStoreOrderStyles.ImageContainer>
                    <img width="150px" src={image.url || DEFAULT_PRODUCT_PHOTO} alt="alternative" />
                  </ApelieStoreOrderStyles.ImageContainer>
                ))}
                empetyComponent={(
                  <ApelieStoreOrderStyles.ImageContainer>
                    <ApelieTextBase variant="subTitle">
                      Não foi encontrado nenhum item
                    </ApelieTextBase>
                  </ApelieStoreOrderStyles.ImageContainer>
                )}
                arrowSize="15"
                breakPointsArray={[
                  { width: 0, itemsToShow: 1 },
                  { width: 450, itemsToShow: 1 },
                  { width: 960, itemsToShow: 1 },
                  { width: 1280, itemsToShow: 1 },
                  { width: 1920, itemsToShow: 1 },
                ]}
                carouselTitle="Pedidos"
                hasArrow
              />
              <ApelieTextBase variant="paragraph1">
                {`Preço total: ${getPriceValue(item)}`}
              </ApelieTextBase>
            </ApelieStoreOrderStyles.OrderProductWrapper>
          </ApelieStoreOrderStyles.ItemWrapper>
        ))}
      </ApelieStoreOrderStyles.ItemsListWrapper>
      {
        order.status === StoreOrdersStatus.AWAITING_SHIPPING && (
          <ApelieIconButton id="add-tracking-button" onClick={() => setIsInsertTrackingCodeOpen(true)}>
            <AddTrackingIcon height="25" width="25" />
          </ApelieIconButton>
        )
      }
    </ApelieStoreOrderStyles.Container>
  );
};

export default ApelieStoreOrder;

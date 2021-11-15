import React, { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import { IAddressRegister, IFirstRegister, IStore } from '@/types/interfaces/interface-store';
import ApelieTextBase from '../ApelieTextBase';
import ApelieRating from '../ApelieRating';
import ApelieStoreResumeStyle from './styles';
import ApelieIconButton from '../ApelieIconButton';
import EditIcon from '@/assets/icons/EditIcon';
import ApelieModal from '../ApelieModal';
import ApelieForm from '../ApelieForm';
import InitialRegister from '@/components/forms/Store/InitialRegister';
import AddressRegister from '@/components/forms/Store/AddressRegister';
import ApelieTextWithDivider from '../ApelieTextWithDivider';
import { ToastContext } from '@/stores/ToastStore';
import { updateStore } from '@/services/store';
import { toWritePhoneFormat } from '@/utils/format';

interface IApelieStoreResume {
    store: IStore,
    isEditable?: boolean,
    whenEdited?: VoidFunction
}

const ApelieStoreResume: React.VoidFunctionComponent<IApelieStoreResume> = ({
  isEditable = false,
  store,
  whenEdited,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { setToastMessage } = useContext(ToastContext);
  const [storeMainInfo, setStoreMainInfo] = useState<IFirstRegister>({
    categories: store.category,
    description: store.description,
    name: store.name,
  });
  const [storeAddressInfo, setStoreAddressInfo] = useState<IAddressRegister>({
    addressNumber: store.addressNumber,
    city: store.city,
    email: store.email,
    neighbourhood: store.neighbourhood,
    phone: store.phone,
    state: store.state,
    street: store.street,
    zipCode: store.zipCode,
    addressNumberError: '',
    phoneError: '',
    zipCodeError: '',
  });

  const doUpdateStore = useMutation(updateStore, {
    onSuccess: (response) => {
      if (response?.status === 204) {
        setToastMessage({
          message: 'As informações que você alterou foram alteradas com sucesso.',
          type: 'success',
        });
        setIsEditModalOpen(false);
        whenEdited && whenEdited();
      } else {
        setToastMessage({
          message: 'Erro ao tentar atualizar as informações que você solicitou.',
          type: 'error',
        });
      }
    },
  });

  return (
    <ApelieStoreResumeStyle.Container>
      <ApelieModal show={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ApelieForm
          formTitle="Atualização das informações da loja"
          id="att-store-info"
          disabledCondition={false}
          backButtonText="Cancelar"
          backButtonAction={() => setIsEditModalOpen(false)}
          nextButtonText="Atualizar"
          nextButtonAction={() => doUpdateStore.mutate({
            ...storeMainInfo,
            ...storeAddressInfo,
            phone: storeAddressInfo.phone.replace('(', '').replace(')', '').replace('-', '').replace(/ /g, ''),
            bannerUrl: store.bannerUrl,
            ...!storeMainInfo.logoImage && { logoUrl: store.logoUrl },
            facebookAccount: store.facebookAccount,
            instagramAccount: store.instagramAccount,
            primaryColor: store.primaryColor,
            secondaryColor: store.secondaryColor,
            twitterAccount: store.twitterAccount,
            youtubeAccount: store.youtubeAccount,
          })}
          hasBackGround={false}
        >
          <InitialRegister registerStoreRequestValue={storeMainInfo} changeStoreRequestFunction={setStoreMainInfo} />
          <ApelieTextWithDivider />
          <AddressRegister registerStoreRequestValue={storeAddressInfo} changeStoreRequestFunction={setStoreAddressInfo} />
        </ApelieForm>
      </ApelieModal>
      {isEditable
        && (
        <ApelieIconButton id="store-info-edit-icon" onClick={() => setIsEditModalOpen(true)}>
          <EditIcon width="20" height="20" />
        </ApelieIconButton>
        )}
      <ApelieStoreResumeStyle.UserPhotoContainer imgUrl={store.logoUrl} />
      <ApelieStoreResumeStyle.StoreInfoContainer>
        <div id="store-detail-and-rating">
          <ApelieTextBase variant="subTitle">{store.name}</ApelieTextBase>
          <div id="store-state-rating">
            <div id="store-location">
              <ApelieTextBase variant="paragraph1">{`${store.city} - ${store.state}`}</ApelieTextBase>
              <ApelieTextBase variant="paragraph2">{`${store.neighbourhood} - ${store.street}, ${store.addressNumber}`}</ApelieTextBase>
            </div>
            <ApelieRating variant="subTitle" rating={store.rating} />
          </div>
        </div>
        <div id="store-contact">
          <ApelieTextBase tag="label" variant="paragraph2">
            Email:
            <ApelieTextBase variant="paragraph2">{store.email}</ApelieTextBase>
          </ApelieTextBase>
          <ApelieTextBase tag="label" variant="paragraph2">
            Telefone:
            <ApelieTextBase variant="paragraph2">{toWritePhoneFormat(store.phone)}</ApelieTextBase>
          </ApelieTextBase>
        </div>
        <div id="store-description">
          <ApelieTextBase tag="label" variant="paragraph2">
            Sobre a loja:
          </ApelieTextBase>
          <ApelieTextBase tag="p" variant="paragraph2">
            {store.description}
          </ApelieTextBase>
        </div>
      </ApelieStoreResumeStyle.StoreInfoContainer>
    </ApelieStoreResumeStyle.Container>
  );
};

export default ApelieStoreResume;

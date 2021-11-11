import React, { useState } from 'react';
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

interface IApelieStoreResume {
    store: IStore,
    isEditable?: boolean,
}

const ApelieStoreResume: React.VoidFunctionComponent<IApelieStoreResume> = ({
  isEditable = false,
  store,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [storeMainInfo, setStoreMainInfo] = useState<IFirstRegister>({
    categories: store.category,
    description: store.description,
    logoImage: store.logoUrl,
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
  return (
    <ApelieStoreResumeStyle.Container>
      <ApelieModal show={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ApelieForm
          id="att-store-info"
          disabledCondition={false}
          backButtonText="Cancelar"
          backButtonAction={() => setIsEditModalOpen(false)}
          nextButtonText="Atualizar"
          nextButtonAction={() => console.log('')}
          hasBackGround={false}
        >
          <InitialRegister formTitle="Atualização do design da página" registerStoreRequestValue={storeMainInfo} changeStoreRequestFunction={setStoreMainInfo} />
          <AddressRegister formTitle="Atualização do design da página" registerStoreRequestValue={storeAddressInfo} changeStoreRequestFunction={setStoreAddressInfo} />
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
            <ApelieTextBase variant="paragraph2">{store.phone}</ApelieTextBase>
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

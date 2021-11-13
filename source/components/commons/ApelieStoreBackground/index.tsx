import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { useMutation } from 'react-query';
import router from 'next/router';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import ApelieStoreBackGroundStyles from './styles';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import EditIcon from '@/assets/icons/EditIcon';
import ApelieIconButton from '../ApelieIconButton';
import ApelieModal from '../ApelieModal';
import DesignRegister from '@/components/forms/Store/DesignRegister';
import { IDesignRegister, ISocialMediaRegister, IStore } from '@/types/interfaces/interface-store';
import ApelieForm from '../ApelieForm';
import { updateStore } from '@/services/store';
import { ToastContext } from '@/stores/ToastStore';
import SocialMediaRegister from '@/components/forms/Store/SocialMediaRegister';
import ApelieTextWithDivider from '../ApelieTextWithDivider';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';

interface IApelieStoreBackGround {
    backgroundHeight?: string
    isEditable?: boolean
    isLogoPositionBottom?: boolean
    logoSize?: string
    storeMediaSocialArray: string[]
    store: IStore
}

const DEFAULT_STORE_PHOTO = '/images/Store/default-placeholder.png';

const ApelieStoreBackGround: React.FC<IApelieStoreBackGround> = ({
  backgroundHeight = '30%',
  isEditable = false,
  store,
  logoSize,
  isLogoPositionBottom = false,
  storeMediaSocialArray,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { setToastMessage } = useContext(ToastContext);
  const [designRegisterValue, setDesignRequestValue] = useState<IDesignRegister>({
    bannerUrl: store.bannerUrl,
    primaryColor: store.primaryColor,
    secondaryColor: store.secondaryColor,
  });
  const [socialMediaValue, setSocialMediaValue] = useState<ISocialMediaRegister>({
    facebookAccount: store.facebookAccount,
    instagramAccount: store.instagramAccount,
    twitterAccount: store.twitterAccount,
    youtubeAccount: store.youtubeAccount,
  });
  const socialMediaIcons = {
    facebookAccount: (
      <ApelieIconButton key="facebook-button" id="facebook-icon">
        <FacebookIcon width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
    youtubeAccount: (
      <ApelieIconButton key="youtube-button" id="youtube-icon">
        <YoutubeIcon width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
    twitterAccount: (
      <ApelieIconButton key="twitter-button" id="twitter-icon">
        <TwitterIcon width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
    instagramAccount: (
      <ApelieIconButton key="instagram-button" id="instagram-icon">
        <InstagramIcon width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
  };

  const doUpdateStore = useMutation(updateStore, {
    onSuccess: (response) => {
      if (response?.status === 204) {
        setToastMessage({
          message: 'As informações que você alterou foram alteradas com sucesso.',
          type: 'success',
        });
        router.push(ApeliePageAlias.MyStore);
      } else {
        setToastMessage({
          message: 'Erro ao tentar atualizar as informações que você solicitou.',
          type: 'error',
        });
      }
    },
  });

  return (
    <ApelieStoreBackGroundStyles.Container
      bannerUrl={designRegisterValue.bannerUrl || DEFAULT_STORE_PHOTO}
      backgroundHeight={backgroundHeight}
    >
      <ApelieModal show={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ApelieForm
          formTitle="Atualização do design da página e das redes sociais"
          id="att-design-info"
          disabledCondition={designRegisterValue.bannerUrl === '' && designRegisterValue.primaryColor === '' && designRegisterValue.secondaryColor === ''}
          backButtonText="Cancelar"
          backButtonAction={() => setIsEditModalOpen(false)}
          nextButtonText="Atualizar"
          nextButtonAction={() => doUpdateStore.mutate({
            addressNumber: store.addressNumber,
            categories: store.category,
            city: store.city,
            description: store.description,
            email: store.description,
            logoImage: store.logoUrl,
            name: store.name,
            neighbourhood: store.neighbourhood,
            phone: store.phone,
            state: store.state,
            street: store.street,
            zipCode: store.zipCode,
            ...designRegisterValue,
            ...socialMediaValue,
          })}
          hasBackGround={false}
        >
          <DesignRegister registerStoreRequestValue={designRegisterValue} changeStoreRequestFunction={setDesignRequestValue} />
          <ApelieTextWithDivider />
          <SocialMediaRegister registerStoreRequestValue={socialMediaValue} changeStoreRequestFunction={setSocialMediaValue} />
        </ApelieForm>
      </ApelieModal>
      {isEditable
      && (
        <ApelieIconButton id="store-edit-icon" isPadding onClick={() => setIsEditModalOpen(true)}>
          <EditIcon width="20" height="20" />
        </ApelieIconButton>
      )}
      <ApelieStoreBackGroundStyles.SocialMediaContainer isLogoPositionBottom={isLogoPositionBottom}>
        {storeMediaSocialArray.map((socialMediakey) => _.get(socialMediaIcons, socialMediakey))}
      </ApelieStoreBackGroundStyles.SocialMediaContainer>
    </ApelieStoreBackGroundStyles.Container>
  );
};

export default ApelieStoreBackGround;

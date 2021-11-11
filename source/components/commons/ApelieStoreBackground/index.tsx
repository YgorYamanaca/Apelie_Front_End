import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { useMutation } from 'react-query';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import ApelieStoreBackGroundStyles from './styles';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import EditIcon from '@/assets/icons/EditIcon';
import ApelieIconButton from '../ApelieIconButton';
import ApelieModal from '../ApelieModal';
import DesignRegister from '@/components/forms/Store/DesignRegister';
import { IDesignRegister } from '@/types/interfaces/interface-store';
import ApelieForm from '../ApelieForm';
import { updateStoreDesign } from '@/services/store';
import { ToastContext } from '@/stores/ToastStore';

interface IApelieStoreBackGround extends IDesignRegister {
    backgroundHeight?: string
    isEditable?: boolean
    isLogoPositionBottom?: boolean
    logoSize?: string
    storeMediaSocialArray: string[]
}

const DEFAULT_STORE_PHOTO = '/images/Store/default-placeholder.png';

const ApelieStoreBackGround: React.FC<IApelieStoreBackGround> = ({
  backgroundHeight = '30%',
  isEditable = false,
  bannerUrl,
  primaryColor,
  secondaryColor,
  logoSize,
  isLogoPositionBottom = false,
  storeMediaSocialArray,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { setToastMessage } = useContext(ToastContext);
  const [designRegisterValue, setDesignRequestValue] = useState<IDesignRegister>({
    bannerUrl,
    primaryColor,
    secondaryColor,
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

  const doUpdateStoreDesign = useMutation(updateStoreDesign, {
    onSuccess: (response) => {
      if (response?.status === 204) {
        setToastMessage({
          message: 'As informações que você alterou foram alteradas com sucesso.',
          type: 'success',
        });
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
      bannerUrl={bannerUrl || DEFAULT_STORE_PHOTO}
      backgroundHeight={backgroundHeight}
    >
      <ApelieModal show={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <ApelieForm
          id="att-design-info"
          disabledCondition={designRegisterValue.bannerUrl === '' && designRegisterValue.primaryColor === '' && designRegisterValue.secondaryColor === ''}
          backButtonText="Cancelar"
          backButtonAction={() => setIsEditModalOpen(false)}
          nextButtonText="Atualizar"
          nextButtonAction={() => doUpdateStoreDesign.mutate(designRegisterValue)}
          hasBackGround={false}
        >
          <DesignRegister formTitle="Atualização do design da página" registerStoreRequestValue={designRegisterValue} changeStoreRequestFunction={setDesignRequestValue} />
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

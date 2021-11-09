import React, { useState } from 'react';
import _ from 'lodash';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import ApelieStoreBackGroundStyles from './styles';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import EditIcon from '@/assets/icons/EditIcon';
import ApelieIconButton from '../ApelieIconButton';
import ApelieModal from '../ApelieModal';

interface IApelieStoreBackGround {
    backgroundHeight?: string;
    isEditable?: boolean
    bannerUrl: string
    isLogoPositionBottom?: boolean
    logoSize?: string
    storeMediaSocialArray: string[]
}

const DEFAULT_STORE_PHOTO = '/images/Store/default-placeholder.png';

const ApelieStoreBackGround: React.FC<IApelieStoreBackGround> = ({
  backgroundHeight = '30%',
  isEditable = false,
  bannerUrl,
  logoSize,
  isLogoPositionBottom = false,
  storeMediaSocialArray,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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

  return (
    <ApelieStoreBackGroundStyles.Container
      bannerUrl={bannerUrl || DEFAULT_STORE_PHOTO}
      backgroundHeight={backgroundHeight}
    >
      <ApelieModal show={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
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

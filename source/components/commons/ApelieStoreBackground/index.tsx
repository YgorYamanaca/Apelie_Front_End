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
    isEditable?: boolean
    bannerUrl: string
    isLogoPositionBottom?: boolean
    logoSize?: string
    storeMediaSocialArray: string[]
}

const ApelieStoreBackGround: React.FC<IApelieStoreBackGround> = ({
  isEditable = false,
  bannerUrl,
  logoSize,
  isLogoPositionBottom = false,
  storeMediaSocialArray,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const socialMediaIcons = {
    facebookAccount: (
      <ApelieIconButton id="facebook-icon">
        <FacebookIcon key="facebook" width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
    youtubeAccount: (
      <ApelieIconButton id="youtube-icon">
        <YoutubeIcon key="youtube" width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
    twitterAccount: (
      <ApelieIconButton id="twitte-icon">
        <TwitterIcon key="twitter" width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
    instagramAccount: (
      <ApelieIconButton id="instagram-icon">
        <InstagramIcon key="instagram" width={logoSize} height={logoSize} />
      </ApelieIconButton>
    ),
  };

  return (
    <ApelieStoreBackGroundStyles.Container bannerUrl={bannerUrl}>
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

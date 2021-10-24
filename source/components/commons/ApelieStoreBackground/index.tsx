import React from 'react';
import _ from 'lodash';
import { StyledProps, withTheme } from 'styled-components';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import ApelieStoreBackGroundStyles from './styles';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import EditIcon from '@/assets/icons/EditIcon';
import ApelieIconButton from '../ApelieIconButton';

interface IApelieStoreBackGround {
    isEditable?: boolean
    bannerUrl: string
    isLogoPositionBottom?: boolean
    logoSize?: string
    storeMediaSocialArray: string[]
}

const ApelieStoreBackGround: React.FC<StyledProps<IApelieStoreBackGround>> = ({
  isEditable = false,
  bannerUrl,
  logoSize,
  isLogoPositionBottom = false,
  storeMediaSocialArray,
  theme,
}) => {
  const socialMediaIcons = {
    facebookAccount: <FacebookIcon key="facebook" width={logoSize} height={logoSize} />,
    youtubeAccount: <YoutubeIcon key="youtube" width={logoSize} height={logoSize} />,
    twitterAccount: <TwitterIcon key="twitter" width={logoSize} height={logoSize} />,
    instagramAccount: <InstagramIcon key="instagram" width={logoSize} height={logoSize} />,
  };

  return (
    <ApelieStoreBackGroundStyles.Container bannerUrl={bannerUrl}>
      {isEditable
      && (
        <ApelieIconButton id="store-edit-icon" color={theme.colors.text.contrastText}>
          <EditIcon width="20" height="20" />
        </ApelieIconButton>
      )}
      <ApelieStoreBackGroundStyles.SocialMediaContainer isLogoPositionBottom={isLogoPositionBottom}>
        {storeMediaSocialArray.map((socialMediakey) => _.get(socialMediaIcons, socialMediakey))}
      </ApelieStoreBackGroundStyles.SocialMediaContainer>
    </ApelieStoreBackGroundStyles.Container>
  );
};

export default withTheme(ApelieStoreBackGround);

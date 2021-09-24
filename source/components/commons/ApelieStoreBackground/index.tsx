import React from 'react';
import _ from 'lodash';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import ApelieStoreBackGroundStyles from './styles';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';

interface IApelieStoreBackGround {
    bannerUrl: string
    storeMediaSocialArray: string[]
}

const ApelieStoreBackGround: React.FC<IApelieStoreBackGround> = ({
  bannerUrl,
  storeMediaSocialArray,
}) => {
  const socialMediaIcons = {
    facebookAccount: <FacebookIcon key="facebook" />,
    youtubeAccount: <YoutubeIcon key="youtube" />,
    twitterAccount: <TwitterIcon key="twitter" />,
    instagramAccount: <InstagramIcon key="instagram" />,
  };

  return (
    <ApelieStoreBackGroundStyles.Container bannerUrl={bannerUrl}>
      <ApelieStoreBackGroundStyles.SocialMediaContainer>
        {storeMediaSocialArray.map((socialMediakey) => _.get(socialMediaIcons, socialMediakey))}
      </ApelieStoreBackGroundStyles.SocialMediaContainer>
    </ApelieStoreBackGroundStyles.Container>
  );
};

export default ApelieStoreBackGround;

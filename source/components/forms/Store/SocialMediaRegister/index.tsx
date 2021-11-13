import React, { ChangeEvent } from 'react';
import { StyledProps, withTheme } from 'styled-components';
import { ISocialMediaRegister } from '@/types/interfaces/interface-store';
import SocialMediaRegisterStyle from './styles';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import handleChange from '@/utils/formUtils';
import ApelieIconWithInput from '@/components/commons/ApelieIconWithInput';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import { IForm } from '@/types/interfaces/interface-apelie-form';

const SocialMediaRegister: React.VoidFunctionComponent<StyledProps<IForm<ISocialMediaRegister>>> = ({
  registerStoreRequestValue,
  changeStoreRequestFunction,
  theme,
}) => (
  <SocialMediaRegisterStyle.Container>
    <ApelieIconWithInput
      icon={<FacebookIcon height="35" width="35" fill={theme.colors.text.primary} />}
      maxLength={50}
      placeholder="Insira o link do facebook da sua loja (Opcional)"
      name="facebookAccount"
      value={registerStoreRequestValue.facebookAccount}
      onChange={
        (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
      }
    />
    <ApelieIconWithInput
      icon={<InstagramIcon height="35" width="35" fill={theme.colors.text.primary} />}
      maxLength={50}
      placeholder="Insira o link do instagram da sua loja (Opcional)"
      name="instagramAccount"
      value={registerStoreRequestValue.instagramAccount}
      onChange={
        (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
      }
    />
    <ApelieIconWithInput
      icon={<TwitterIcon height="35" width="35" fill={theme.colors.text.primary} />}
      maxLength={50}
      placeholder="Insira o link do twitter da sua loja (Opcional)"
      name="twitterAccount"
      value={registerStoreRequestValue.twitterAccount}
      onChange={
        (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
      }
    />
    <ApelieIconWithInput
      icon={<YoutubeIcon height="35" width="35" fill={theme.colors.text.primary} />}
      maxLength={50}
      placeholder="Insira o link fo youtube da sua loja (Opcional)"
      name="youtubeAccount"
      value={registerStoreRequestValue.youtubeAccount}
      onChange={
        (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
      }
    />
  </SocialMediaRegisterStyle.Container>
);

export default withTheme(SocialMediaRegister);

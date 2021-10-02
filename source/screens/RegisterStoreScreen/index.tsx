import React, {
  ChangeEvent, ReactElement, useCallback, useState,
} from 'react';
import Image from 'next/image';
import { DefaultTheme, StyledProps, withTheme } from 'styled-components';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import RegisterStoreScreenStyle from './styles';
import ApelieButton from '@/components/commons/ApelieButton';
import ApelieUploadPhoto from '@/components/commons/ApelieUploadPhoto';
import { IStoreRequest } from '@/types/interfaces/interface-store';
import ApelieInputField from '@/components/commons/ApelieInputField';
import handleChange from '@/utils/formUtils';
import ApelieSelectBox from '@/components/commons/ApelieSelectBox';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import ApelieIconWithInput from '@/components/commons/ApelieIconWithInput';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';

interface IRegister {
  content: ReactElement;
  backButtonAction?: VoidFunction;
  nextButtonAction: VoidFunction;
  disabledCondition: boolean;
}

interface IRegisterStoreSteps {
  firstStep: IRegister;
  designStep: IRegister;
  socialMediaStep: IRegister;
  addressStep: IRegister;
}

const INITIAL_REQUEST: IStoreRequest = {
  twitterAccount: '',
  categories: [],
  instagramAccount: '',
  state: '',
  facebookAccount: '',
  youtubeAccount: '',
  bannerImage: '',
  logoImage: '',
  primaryColor: '',
  secondaryColor: '',
  street: '',
  city: '',
  cep: '',
  name: '',
  email: '',
  phone: '',
  addressNumber: '',
  neighbourhood: '',
  description: '',
};

const RegisterStoreScreen: React.FC<StyledProps<DefaultTheme>> = ({
  theme,
}) => {
  const [step, setStep] = useState<keyof IRegisterStoreSteps>('socialMediaStep');
  const [registerStoreRequest, setRegisterStoreRequest] = useState<IStoreRequest>(INITIAL_REQUEST);

  const handleUploadStoreImage = useCallback(
    (logoImage: string) => {
      setRegisterStoreRequest({
        ...registerStoreRequest,
        logoImage,
      });
    },
    [registerStoreRequest],
  );

  const handleUploadStoreBannerImage = useCallback(
    (bannerImage: string) => {
      setRegisterStoreRequest({
        ...registerStoreRequest,
        bannerImage,
      });
    },
    [registerStoreRequest],
  );

  const validStep = useCallback(
    (stepToBeValidated: keyof IRegisterStoreSteps) => {
      setStep(stepToBeValidated);
    },
    [step, registerStoreRequest],
  );

  const FirstStepContent = (
    <RegisterStoreScreenStyle.FirstStepContainer>
      <ApeliePageTitle>
        Cadastro Inicial da Loja
      </ApeliePageTitle>
      <div id="content">
        <div id="store-logo-image-content">
          <ApelieUploadPhoto
            selectedPhotoKey="logoImage"
            onImageSelect={handleUploadStoreImage}
            textOfUploadDragArea="Faça o upload do logo da loja"
          />
        </div>
        <div id="store-detail-content">
          <ApelieInputField
            maxLength={35}
            placeholder="Nome da Loja"
            name="name"
            value={registerStoreRequest.name}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
          />

          <ApelieSelectBox
            placeholder="Escolha a categoria da loja..."
            type="MULTI"
            width="100%"
            onChange={(selectedValues) => setRegisterStoreRequest({
              ...registerStoreRequest,
              categories: [...selectedValues],
            })}
            options={[
              { value: 'FOOD', label: 'Comida' },
              { value: 'ART', label: 'Arte' },
              { value: 'CUP', label: 'Copo' },
            ]}
          />

          <ApelieInputField
            type="textarea"
            placeholder="Descrição da Loja"
            name="description"
            value={registerStoreRequest.description}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
            maxLength={275}
          />
        </div>
      </div>
    </RegisterStoreScreenStyle.FirstStepContainer>
  );

  const DesignStepContent = (
    <RegisterStoreScreenStyle.DesignStepContainer>
      <ApeliePageTitle>
        Cadastro de Design da loja
      </ApeliePageTitle>
      <div id="content">
        <div id="store-banner-image-content">
          <ApelieUploadPhoto
            selectedPhotoKey="bannerImage"
            onImageSelect={handleUploadStoreBannerImage}
            textOfUploadDragArea="Faça o upload do banner da loja"
          />
        </div>
        <div id="store-color-select-content">
          <ApelieSelectBox
            placeholder="Cor primária de sua loja..."
            type="SINGLE"
            onChange={(selectedValues) => setRegisterStoreRequest({
              ...registerStoreRequest,
              primaryColor: selectedValues[0],
            })}
            options={[
              { value: 'Cor-1', label: 'Vermelho' },
              { value: 'Cor-2', label: 'Roxo' },
              { value: 'Cor-3', label: 'Azul' },
            ]}
          />

          <ApelieSelectBox
            placeholder="Cor secundária de sua loja..."
            type="SINGLE"
            onChange={(selectedValues) => setRegisterStoreRequest({
              ...registerStoreRequest,
              secondaryColor: selectedValues[0],
            })}
            options={[
              { value: 'Cor-1', label: 'Vermelho' },
              { value: 'Cor-2', label: 'Roxo' },
              { value: 'Cor-3', label: 'Azul' },
            ]}
          />
        </div>
      </div>
    </RegisterStoreScreenStyle.DesignStepContainer>
  );

  const SocialMediaStepContent = (
    <RegisterStoreScreenStyle.SocialMediaStepContent>
      <ApeliePageTitle>
        Cadastro das medias sociais
      </ApeliePageTitle>

      <ApelieIconWithInput
        icon={<FacebookIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={35}
        placeholder="Insira o link do facebook da sua loja (Opcional)"
        name="facebookAccount"
        value={registerStoreRequest.facebookAccount}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
      />
      <ApelieIconWithInput
        icon={<InstagramIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={35}
        placeholder="Insira o link do instagram da sua loja (Opcional)"
        name="instagramAccount"
        value={registerStoreRequest.instagramAccount}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
      />
      <ApelieIconWithInput
        icon={<TwitterIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={35}
        placeholder="Insira o link do twitter da sua loja (Opcional)"
        name="twitterAccount"
        value={registerStoreRequest.twitterAccount}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
      />
      <ApelieIconWithInput
        icon={<YoutubeIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={35}
        placeholder="Insira o link fo youtube da sua loja (Opcional)"
        name="instagramAccount"
        value={registerStoreRequest.instagramAccount}
        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
      />
    </RegisterStoreScreenStyle.SocialMediaStepContent>
  );

  const firstStep: IRegister = {
    content: FirstStepContent,
    nextButtonAction: () => validStep('designStep'),
    disabledCondition: !registerStoreRequest?.logoImage || !registerStoreRequest.name,
  };

  const designStep: IRegister = {
    content: DesignStepContent,
    backButtonAction: () => setStep('firstStep'),
    nextButtonAction: () => validStep('socialMediaStep'),
    disabledCondition: true,
  };

  const socialMediaStep: IRegister = {
    content: SocialMediaStepContent,
    backButtonAction: () => setStep('designStep'),
    nextButtonAction: () => validStep('addressStep'),
    disabledCondition: true,
  };

  const addressStep: IRegister = {
    content: (
      <div>teste4</div>
    ),
    backButtonAction: () => setStep('socialMediaStep'),
    nextButtonAction: () => console.log('Disparar ação'),
    disabledCondition: true,
  };

  const registerStoreSteps: IRegisterStoreSteps = {
    firstStep,
    designStep,
    socialMediaStep,
    addressStep,
  };

  return (
    <RegisterStoreScreenStyle.Container>
      <div id="image-container">
        <img
          src="/images/RegisterStore/window-shopping-animate.svg"
          alt="ApelieRegisterImg1"
          height={350}
          width={350}
        />

        <img
          src="/images/Home/Home-Animated-Image1.svg"
          alt="ApelieRegisterImg2"
          height={350}
          width={350}
        />
      </div>
      <RegisterStoreScreenStyle.RegisterStoreContainer>
        <RegisterStoreScreenStyle.RegisterStoreContainerContent>
          {registerStoreSteps[step].content}
        </RegisterStoreScreenStyle.RegisterStoreContainerContent>
        <RegisterStoreScreenStyle.RegisterStoreContainerFooter>
          {registerStoreSteps[step]?.backButtonAction && (
          <ApelieButton
            id={`${step}-back-button`}
            textVariant="paragraph1"
            buttonColor="secondary"
            textColor="contrastText"
            onClick={() => {
              const executeBackButtonAction = registerStoreSteps[step]?.backButtonAction ?? function () { return null; };
              executeBackButtonAction();
            }}
          >
            Voltar
          </ApelieButton>
          )}
          <ApelieButton
            id={`${step}-next-button`}
            textVariant="paragraph1"
            onClick={() => registerStoreSteps[step]?.nextButtonAction()}
            disabled={registerStoreSteps[step]?.disabledCondition}
          >
            Proximo
          </ApelieButton>
        </RegisterStoreScreenStyle.RegisterStoreContainerFooter>
      </RegisterStoreScreenStyle.RegisterStoreContainer>
    </RegisterStoreScreenStyle.Container>
  );
};

export default withTheme(RegisterStoreScreen);

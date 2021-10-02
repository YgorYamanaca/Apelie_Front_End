import React, {
  ChangeEvent, ReactElement, useCallback, useState,
} from 'react';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import RegisterStoreScreenStyle from './styles';
import ApelieButton from '@/components/commons/ApelieButton';
import ApelieUploadPhoto from '@/components/commons/ApelieUploadPhoto';
import { IStoreRequest } from '@/types/interfaces/interface-store';
import ApelieInputField from '@/components/commons/ApelieInputField';
import handleChange from '@/utils/formUtils';
import ApelieSelectBox from '@/components/commons/ApelieSelectBox';

interface IRegister {
  title: string;
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

const RegisterStoreScreen: React.FC = () => {
  const [step, setStep] = useState<keyof IRegisterStoreSteps>('designStep');
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
    </RegisterStoreScreenStyle.FirstStepContainer>
  );

  const DesignStepContent = (
    <RegisterStoreScreenStyle.DesignStepContainer>
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
    </RegisterStoreScreenStyle.DesignStepContainer>
  );

  const firstStep: IRegister = {
    title: 'Cadastro Inicial da Loja',
    content: FirstStepContent,
    nextButtonAction: () => validStep('designStep'),
    disabledCondition: !registerStoreRequest?.logoImage || !registerStoreRequest.name,
  };

  const designStep: IRegister = {
    title: 'Cadastro de Design da loja',
    content: DesignStepContent,
    backButtonAction: () => setStep('firstStep'),
    nextButtonAction: () => validStep('socialMediaStep'),
    disabledCondition: true,
  };

  const socialMediaStep: IRegister = {
    title: 'Cadastro das medias sociais',
    content: (
      <div>teste3</div>
    ),
    backButtonAction: () => setStep('designStep'),
    nextButtonAction: () => validStep('addressStep'),
    disabledCondition: true,
  };

  const addressStep: IRegister = {
    title: 'Cadastro de Endereço',
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
      <ApeliePageTitle>
        {registerStoreSteps[step].title}
      </ApeliePageTitle>
      <RegisterStoreScreenStyle.RegisterStoreContainer>
        <RegisterStoreScreenStyle.RegisterStoreContainerContent>
          {registerStoreSteps[step].content}
        </RegisterStoreScreenStyle.RegisterStoreContainerContent>
        <RegisterStoreScreenStyle.RegisterStoreContainerFooter>
          {registerStoreSteps[step]?.backButtonAction && (
          <ApelieButton
            id={`${step}-back-button`}
            textVariant="paragraph1"
            buttonType="secondary"
            textColor="secondary"
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

export default RegisterStoreScreen;

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
  const [step, setStep] = useState<keyof IRegisterStoreSteps>('firstStep');
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

  const validStep = useCallback(
    (stepToBeValidated: keyof IRegisterStoreSteps) => {
      setStep(stepToBeValidated);
    },
    [step, registerStoreRequest],
  );

  const firstStepContent = (
    <RegisterStoreScreenStyle.FirstStepContainer>
      <div id="store-logo-image-content">
        <ApelieUploadPhoto
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

        <ApelieInputField
          maxLength={35}
          placeholder="Nome da Loja"
          name="name"
          value={registerStoreRequest.name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
        />

        <ApelieInputField
          maxLength={35}
          placeholder="Nome da Loja"
          name="name"
          value={registerStoreRequest.name}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)}
        />
      </div>
    </RegisterStoreScreenStyle.FirstStepContainer>
  );

  const firstStep: IRegister = {
    title: 'Cadastro Inicial da Loja',
    content: firstStepContent,
    nextButtonAction: () => validStep('designStep'),
    disabledCondition: !registerStoreRequest?.logoImage || !registerStoreRequest.name,
  };

  const designStep: IRegister = {
    title: 'Cadastro de Design da loja',
    content: (
      <div>teste2</div>
    ),
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
        Cadastro de Loja
      </ApeliePageTitle>
      <RegisterStoreScreenStyle.RegisterStoreContainer>
        <RegisterStoreScreenStyle.RegisterStoreContainerHeader>
          <ApeliePageTitle>
            {registerStoreSteps[step].title}
          </ApeliePageTitle>
        </RegisterStoreScreenStyle.RegisterStoreContainerHeader>
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

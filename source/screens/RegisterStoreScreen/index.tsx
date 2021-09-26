import React, { ReactElement, useCallback, useState } from 'react';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import RegisterStoreScreenStyle from './styles';
import ApelieButton from '@/components/commons/ApelieButton';

interface IRegister {
  title: string;
  content: ReactElement;
  backButtonAction?: VoidFunction;
  nextButtonAction: VoidFunction;
}

interface IRegisterStoreSteps {
  firstStep: IRegister;
  designStep: IRegister;
  socialMediaStep: IRegister;
  addressStep: IRegister;
}

const RegisterStoreScreen: React.FC = () => {
  const [step, setStep] = useState<keyof IRegisterStoreSteps>('firstStep');
  const [registerStoreRequest, setRegisterStoreRequest] = useState();

  const validStep = useCallback(
    (stepToBeValidated: keyof IRegisterStoreSteps) => {
      console.log(stepToBeValidated, registerStoreRequest);

      setStep(stepToBeValidated);
    },
    [step, registerStoreRequest],
  );

  const firstStep: IRegister = {
    title: 'Cadastro Inicial da Loja',
    content: (
      <div>teste1</div>
    ),
    nextButtonAction: () => validStep('designStep'),
  };

  const designStep: IRegister = {
    title: 'Cadastro de Design da loja',
    content: (
      <div>teste2</div>
    ),
    backButtonAction: () => setStep('firstStep'),
    nextButtonAction: () => validStep('socialMediaStep'),
  };

  const socialMediaStep: IRegister = {
    title: 'Cadastro das medias sociais',
    content: (
      <div>teste3</div>
    ),
    backButtonAction: () => setStep('designStep'),
    nextButtonAction: () => validStep('addressStep'),
  };

  const addressStep: IRegister = {
    title: 'Cadastro de Endereço',
    content: (
      <div>teste4</div>
    ),
    backButtonAction: () => setStep('socialMediaStep'),
    nextButtonAction: () => console.log('Disparar ação'),
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
          >
            Proximo
          </ApelieButton>
        </RegisterStoreScreenStyle.RegisterStoreContainerFooter>
      </RegisterStoreScreenStyle.RegisterStoreContainer>
    </RegisterStoreScreenStyle.Container>
  );
};

export default RegisterStoreScreen;

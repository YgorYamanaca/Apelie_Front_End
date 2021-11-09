import React, {
  useCallback, useContext, useState,
} from 'react';
import { useMutation } from 'react-query';
import _ from 'lodash';
import { useRouter } from 'next/router';
import RegisterStoreScreenStyle from './styles';
import { IStoreRequest, IStoreRequestWithErrors } from '@/types/interfaces/interface-store';
import { postStore } from '@/services/store';
import { ToastContext } from '@/stores/ToastStore';
import { isValidateCepFormat, isValidateTelFormat } from '@/utils/validations';
import ApelieForm from '@/components/commons/ApelieForm';
import InitialRegister from '@/components/forms/Store/InitialRegister';
import DesignRegister from '@/components/forms/Store/DesignRegister';
import SocialMediaRegister from '@/components/forms/Store/SocialMediaRegister';
import AddressRegister from '@/components/forms/Store/AddressRegister';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';

interface IRegister {
  content: React.ReactNode;
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
  zipCode: '',
  name: '',
  email: '',
  phone: '',
  addressNumber: '',
  neighbourhood: '',
  description: '',
};

const RegisterStoreScreen: React.VoidFunctionComponent = () => {
  const [step, setStep] = useState<keyof IRegisterStoreSteps>('firstStep');
  const { setToastMessage } = useContext(ToastContext);
  const [registerStoreRequest, setRegisterStoreRequest] = useState<IStoreRequestWithErrors>(INITIAL_REQUEST);
  const router = useRouter();

  const doPostStoreRequest = useMutation(postStore, {
    onSuccess: (response) => {
      if (response.status === 200) {
        setToastMessage({
          message: 'Sua loja foi cadastrado com sucesso.',
          type: 'success',
        });
        router.push(ApeliePageAlias.MyStore);
      } else {
        setToastMessage({
          message: 'Erro ao tentar cadastrar a loja.',
          type: 'error',
        });
      }
    },
  });

  function attSocialMedia(
    stateToBeAtt: 'facebookAccount' | 'instagramAccount' | 'twitterAccount' | 'youtubeAccount',
    pageAdreess: string,
  ) {
    if (registerStoreRequest[stateToBeAtt]?.toLocaleLowerCase().includes(pageAdreess)) {
      const indexTobeGet = registerStoreRequest[stateToBeAtt].split('/').length
        - (stateToBeAtt === 'youtubeAccount' || stateToBeAtt === 'twitterAccount' ? 1 : 2);
      const userPart = registerStoreRequest[stateToBeAtt].split('/')[indexTobeGet];
      setRegisterStoreRequest({
        ...registerStoreRequest,
        [stateToBeAtt]: userPart,
      });
    }
  }

  function handleRegisterStoreSubmit() {
    if (isValidateCepFormat(registerStoreRequest.zipCode)
      && isValidateTelFormat(registerStoreRequest.phone)
      && registerStoreRequest.addressNumber.length === 3
      && _.has(registerStoreRequest, [
        'categories',
        'state',
        'bannerImage',
        'logoImage',
        'primaryColor',
        'secondaryColor',
        'street',
        'city',
        'zipCode',
        'name',
        'email',
        'phone',
        'addressNumber',
        'neighbourhood',
        'description',
      ])
    ) {
      doPostStoreRequest.mutate(
        registerStoreRequest,
      );
    } else if (!isValidateCepFormat(registerStoreRequest.zipCode) || !isValidateTelFormat(registerStoreRequest.phone) || registerStoreRequest.addressNumber.length !== 3) {
      setRegisterStoreRequest({
        ...registerStoreRequest,
        addressNumberError: registerStoreRequest.addressNumber.length !== 3 ? 'Você precisa completar o número do endereço' : '',
        phoneError: !isValidateTelFormat(registerStoreRequest.phone) ? 'O seu telefone não é válido' : '',
        cepError: !isValidateCepFormat(registerStoreRequest.zipCode) ? 'Está faltando número no zipCode' : '',
      });
    } else {
      setToastMessage({
        message: 'Não foi possível cadastrar a sua loja, alguma informação não foi preechida.',
        type: 'error',
      });
    }
  }

  const validStep = useCallback(
    (stepToBeValidated: keyof IRegisterStoreSteps) => {
      if (step === 'socialMediaStep') {
        attSocialMedia('facebookAccount', 'facebook.com');
        attSocialMedia('instagramAccount', 'instagram.com');
        attSocialMedia('twitterAccount', 'twitter.com');
        attSocialMedia('youtubeAccount', 'youtube.com');
        setStep(stepToBeValidated);
      } else {
        setStep(stepToBeValidated);
      }
    },
    [step, registerStoreRequest],
  );

  const firstStep: IRegister = {
    content: <InitialRegister registerStoreRequestValue={registerStoreRequest} changeStoreRequestFunction={setRegisterStoreRequest} />,
    nextButtonAction: () => validStep('designStep'),
    disabledCondition:
    !registerStoreRequest.logoImage
    || !registerStoreRequest.name
    || !registerStoreRequest.description
    || registerStoreRequest.categories.length === 0,
  };

  const designStep: IRegister = {
    content: <DesignRegister registerStoreRequestValue={registerStoreRequest} changeStoreRequestFunction={setRegisterStoreRequest} />,
    backButtonAction: () => setStep('firstStep'),
    nextButtonAction: () => validStep('socialMediaStep'),
    disabledCondition:
    !registerStoreRequest.primaryColor
    || !registerStoreRequest.secondaryColor
    || !registerStoreRequest.bannerImage,
  };

  const socialMediaStep: IRegister = {
    content: <SocialMediaRegister registerStoreRequestValue={registerStoreRequest} changeStoreRequestFunction={setRegisterStoreRequest} />,
    backButtonAction: () => setStep('designStep'),
    nextButtonAction: () => validStep('addressStep'),
    disabledCondition: false,
  };

  const addressStep: IRegister = {
    content: <AddressRegister registerStoreRequestValue={registerStoreRequest} changeStoreRequestFunction={setRegisterStoreRequest} />,
    backButtonAction: () => setStep('socialMediaStep'),
    nextButtonAction: () => handleRegisterStoreSubmit(),
    disabledCondition:
    !registerStoreRequest.zipCode
    || !registerStoreRequest.state
    || !registerStoreRequest.city
    || !registerStoreRequest.neighbourhood
    || !registerStoreRequest.street
    || !registerStoreRequest.addressNumber,
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
      <ApelieForm
        id={step}
        nextButtonAction={registerStoreSteps[step]?.nextButtonAction}
        backButtonAction={registerStoreSteps[step]?.backButtonAction}
        disabledCondition={registerStoreSteps[step]?.disabledCondition}
      >
        {registerStoreSteps[step].content}
      </ApelieForm>
    </RegisterStoreScreenStyle.Container>
  );
};

export default RegisterStoreScreen;

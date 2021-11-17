import React, {
  useCallback, useContext, useState,
} from 'react';
import { useMutation } from 'react-query';
import _ from 'lodash';
import { useRouter } from 'next/router';
import RegisterStoreScreenStyle from './styles';
import {
  IAddressRegister, IDesignRegister, IFirstRegister, ISocialMediaRegister, IStoreRequest,
} from '@/types/interfaces/interface-store';
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
  formTitle: string;
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

const INITIAL_REQUEST_FIRST_REGISTER: IFirstRegister = {
  categories: [],
  name: '',
  description: '',
  logoImage: '',
};

const INITIAL_REQUEST_DESIGN_REGISTER: IDesignRegister = {
  bannerImage: '',
  primaryColor: '',
  secondaryColor: '',
};

const INITIAL_REQUEST_SOCIALMEDIA_REGISTER: ISocialMediaRegister = {
  facebookAccount: '',
  instagramAccount: '',
  twitterAccount: '',
  youtubeAccount: '',
};

const INITIAL_REQUEST_ADDRESS_REGISTER: IAddressRegister = {
  addressNumber: '',
  city: '',
  email: '',
  neighbourhood: '',
  phone: '',
  state: '',
  street: '',
  zipCode: '',
  addressNumberError: '',
  phoneError: '',
  zipCodeError: '',
};

const RegisterStoreScreen: React.VoidFunctionComponent = () => {
  const [step, setStep] = useState<keyof IRegisterStoreSteps>('firstStep');
  const { setToastMessage } = useContext(ToastContext);
  const [firstRegisterValue, setFirstRequestValue] = useState<IFirstRegister>(INITIAL_REQUEST_FIRST_REGISTER);
  const [designRegisterValue, setDesignRequestValue] = useState<IDesignRegister>(INITIAL_REQUEST_DESIGN_REGISTER);
  const [socialMediaRegisterValue, setSocialMediaRequestValue] = useState<ISocialMediaRegister>(INITIAL_REQUEST_SOCIALMEDIA_REGISTER);
  const [addressRegisterValue, setAddressRequestValue] = useState<IAddressRegister>(INITIAL_REQUEST_ADDRESS_REGISTER);
  const router = useRouter();

  const doPostStoreRequest = useMutation(postStore, {
    onSuccess: (response) => {
      if (response?.status === 200 || response?.status === 201) {
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
    if (socialMediaRegisterValue[stateToBeAtt]?.toLocaleLowerCase().includes(pageAdreess)) {
      const indexTobeGet = socialMediaRegisterValue[stateToBeAtt].split('/').length
        - (stateToBeAtt === 'youtubeAccount' || stateToBeAtt === 'twitterAccount' ? 1 : 2);
      const userPart = socialMediaRegisterValue[stateToBeAtt].split('/')[indexTobeGet];
      setSocialMediaRequestValue({
        ...socialMediaRegisterValue,
        [stateToBeAtt]: userPart,
      });
    }
  }

  function getRequestDataToBeSand(): IStoreRequest {
    const newaddressRequestValue = {
      ...addressRegisterValue,
      phone: addressRegisterValue.phone.replace('(', '').replace(')', '').replace('-', '').replace(/ /g, ''),
    };

    return {
      ...newaddressRequestValue,
      ...firstRegisterValue,
      ...socialMediaRegisterValue,
      ...designRegisterValue,
    };
  }

  function handleRegisterStoreSubmit() {
    if (isValidateCepFormat(addressRegisterValue.zipCode)
      && isValidateTelFormat(addressRegisterValue.phone)
      && addressRegisterValue.addressNumber.length === 3
    ) {
      doPostStoreRequest.mutate(
        _.omit(getRequestDataToBeSand(), ['nameError', 'descriptionError', 'zipCodeError', 'addressNumberError', 'phoneError', 'neighbourhoodError', 'streetError', 'emailError']),
      );
    } else if (!isValidateCepFormat(addressRegisterValue.zipCode) || !isValidateTelFormat(addressRegisterValue.phone) || addressRegisterValue.addressNumber.length !== 3) {
      setAddressRequestValue({
        ...addressRegisterValue,
        addressNumberError: addressRegisterValue.addressNumber.length !== 3 ? 'Você precisa completar o número do endereço' : '',
        phoneError: !isValidateTelFormat(addressRegisterValue.phone) ? 'O seu telefone não é válido' : '',
        zipCodeError: !isValidateCepFormat(addressRegisterValue.zipCode) ? 'Está faltando número no zipCode' : '',
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
    [step],
  );

  const firstStep: IRegister = {
    formTitle: 'Cadastro Inicial da Loja',
    content: <InitialRegister registerStoreRequestValue={firstRegisterValue} changeStoreRequestFunction={setFirstRequestValue} />,
    nextButtonAction: () => validStep('designStep'),
    disabledCondition:
    !firstRegisterValue.logoImage
    || !firstRegisterValue.name
    || !firstRegisterValue.description
    || firstRegisterValue.categories.length === 0,
  };

  const designStep: IRegister = {
    formTitle: 'Cadastro de Design da loja',
    content: <DesignRegister registerStoreRequestValue={designRegisterValue} changeStoreRequestFunction={setDesignRequestValue} />,
    backButtonAction: () => setStep('firstStep'),
    nextButtonAction: () => validStep('socialMediaStep'),
    disabledCondition:
    !designRegisterValue.primaryColor
    || !designRegisterValue.secondaryColor
    || !designRegisterValue.bannerImage,
  };

  const socialMediaStep: IRegister = {
    formTitle: 'Cadastro das medias sociais',
    content: <SocialMediaRegister registerStoreRequestValue={socialMediaRegisterValue} changeStoreRequestFunction={setSocialMediaRequestValue} />,
    backButtonAction: () => setStep('designStep'),
    nextButtonAction: () => validStep('addressStep'),
    disabledCondition: false,
  };

  const addressStep: IRegister = {
    formTitle: 'Cadastro de endereço',
    content: <AddressRegister registerStoreRequestValue={addressRegisterValue} changeStoreRequestFunction={setAddressRequestValue} />,
    backButtonAction: () => setStep('socialMediaStep'),
    nextButtonAction: () => handleRegisterStoreSubmit(),
    disabledCondition:
    !addressRegisterValue.zipCode
    || !addressRegisterValue.state
    || !addressRegisterValue.city
    || !addressRegisterValue.neighbourhood
    || !addressRegisterValue.street
    || !addressRegisterValue.addressNumber
    || !addressRegisterValue.phone
    || !addressRegisterValue.email,
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
        formTitle={registerStoreSteps[step]?.formTitle}
        id={step}
        nextButtonAction={registerStoreSteps[step]?.nextButtonAction}
        backButtonAction={registerStoreSteps[step]?.backButtonAction}
        disabledCondition={registerStoreSteps[step]?.disabledCondition}
        hasBackGround
        hasPadding
      >
        {registerStoreSteps[step].content}
      </ApelieForm>
    </RegisterStoreScreenStyle.Container>
  );
};

export default RegisterStoreScreen;
